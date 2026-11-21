import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  fullName?: string;
  email?: string;
  company?: string;
  product?: string;
  quantity?: string;
  destination?: string;
  service?: string;
  details?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const fullName = body.fullName?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const product = body.product?.trim() ?? "";
    const quantity = body.quantity?.trim() ?? "";
    const destination = body.destination?.trim() ?? "";
    const service = body.service?.trim() ?? "";
    const details = body.details?.trim() ?? "";

    if (!fullName || !email || !product) {
      return NextResponse.json(
        { error: "Full name, email, and product requirement are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ?? "AJ Sourcing <onboarding@resend.dev>";

    if (!apiKey || !toEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const html = `
      <h2>New sourcing enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
      <p><strong>Product requirement:</strong> ${escapeHtml(product)}</p>
      <p><strong>Quantity:</strong> ${escapeHtml(quantity || "—")}</p>
      <p><strong>Destination:</strong> ${escapeHtml(destination || "—")}</p>
      <p><strong>Service needed:</strong> ${escapeHtml(service || "—")}</p>
      <p><strong>Additional details:</strong></p>
      <p>${escapeHtml(details || "—").replace(/\n/g, "<br/>")}</p>
    `;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New quote request from ${fullName}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send enquiry. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

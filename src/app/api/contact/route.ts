import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  fullName?: string;
  email?: string;
  company?: string;
  city?: string;
  country?: string;
  service?: string;
  brief?: string;
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
    const city = body.city?.trim() ?? "";
    const country = body.country?.trim() ?? "";
    const service = body.service?.trim() ?? "";
    const brief = body.brief?.trim() ?? "";

    if (!fullName || !email || !brief) {
      return NextResponse.json(
        { error: "Full name, email, and brief are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    // Only notify the business — no email to the form submitter.
    const { error } = await resend.emails.send({
      from: "AJ Sourcing <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `New quote request from ${fullName}`,
      html: `
        <h2>New sourcing enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
        <p><strong>City:</strong> ${escapeHtml(city || "—")}</p>
        <p><strong>Country:</strong> ${escapeHtml(country || "—")}</p>
        <p><strong>Service needed:</strong> ${escapeHtml(service || "—")}</p>
        <p><strong>Brief:</strong></p>
        <p>${escapeHtml(brief).replace(/\n/g, "<br/>")}</p>
      `,
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

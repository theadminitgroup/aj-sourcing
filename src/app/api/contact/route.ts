import { NextResponse } from "next/server";

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

/** Free forever form → inbox relay (FormSubmit). No paid plan required. */
const DEFAULT_INBOX = "ahmad@ahj.com.hk";
const SITE_ORIGIN = "https://www.ajsourcing.com.hk";

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

    const toEmail = (process.env.CONTACT_TO_EMAIL ?? DEFAULT_INBOX).trim();

    // FormSubmit is free — delivers a copy of the enquiry to your inbox only.
    // Origin/Referer required so FormSubmit accepts server-side relay.
    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: SITE_ORIGIN,
          Referer: `${SITE_ORIGIN}/`,
        },
        body: JSON.stringify({
          name: fullName,
          email,
          company: company || "—",
          city: city || "—",
          country: country || "—",
          service: service || "—",
          brief,
          _subject: `New quote request from ${fullName}`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
        }),
      }
    );

    const json = (await res.json().catch(() => ({}))) as {
      success?: string | boolean;
      message?: string;
    };

    const success =
      json.success === true || json.success === "true" || res.ok;
    const needsActivation =
      typeof json.message === "string" &&
      json.message.toLowerCase().includes("activation");

    if (needsActivation) {
      // First-time setup: FormSubmit emailed an Activate link to the inbox.
      return NextResponse.json({
        ok: true,
        pendingActivation: true,
        message:
          "Check ahmad@ahj.com.hk for a FormSubmit activation email and click the link, then submit again.",
      });
    }

    if (!success || json.success === "false" || json.success === false) {
      console.error("FormSubmit error:", res.status, json);
      return NextResponse.json(
        {
          error:
            json.message ||
            "Failed to send enquiry. Please try again.",
        },
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

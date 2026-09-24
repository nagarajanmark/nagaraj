import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";

// Basic in-memory rate limiting map for server-side abuse prevention
const rateLimitMap = new Map<string, number>();

export async function POST(req: Request) {
  try {
    // 1. IP / client identifier rate limiting check
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "anonymous";
    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip);

    if (lastRequest && now - lastRequest < 10000) {
      // 10-second cooldown per IP
      return NextResponse.json(
        { error: "Too many requests. Please wait a few seconds before sending another message." },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, now);

    // Clean up old rate limit records periodically
    if (rateLimitMap.size > 1000) {
      rateLimitMap.clear();
    }

    // 2. Parse payload
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { name, email, phone, message, botField } = body;

    // 3. Security: Honeypot trap
    if (botField) {
      // Pretend success to mislead bots
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // 4. Strict Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name (at least 2 characters)." },
        { status: 422 }
      );
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 422 }
      );
    }

    // Phone validation
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,16}$/;
    if (!phone || typeof phone !== "string" || !phoneRegex.test(phone.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid mobile / phone number." },
        { status: 422 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 15) {
      return NextResponse.json(
        { error: "Please enter a message of at least 15 characters describing your project." },
        { status: 422 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: "Message is too long (maximum 2000 characters)." },
        { status: 422 }
      );
    }

    // 5. Send Email via Nodemailer
    await sendContactEmail({
      name: name.trim().slice(0, 100),
      email: email.trim().slice(0, 120),
      phone: phone.trim().slice(0, 30),
      message: message.trim().slice(0, 2000),
    });

    return NextResponse.json({
      success: true,
      message: "Your project inquiry has been sent securely.",
    });
  } catch (error: unknown) {
    console.error("API /api/contact Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to process message transmission.";

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

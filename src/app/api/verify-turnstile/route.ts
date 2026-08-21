import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { tsToken, honeypot } = body;

  // Honeypot check — silent success to fool bots
  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  // Token missing
  if (!tsToken) {
    return NextResponse.json({ success: false, error: 'Missing security token' }, { status: 400 });
  }

  // Get IP
  const ip =
    req.headers.get('cf-connecting-ip') ||
    req.headers.get('x-forwarded-for')?.split(',')[0] ||
    '127.0.0.1';

  // Verify with Cloudflare
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: tsToken,
      remoteip: ip,
    }),
  });

  const data = await res.json();

  if (!data.success) {
    return NextResponse.json({ success: false, error: 'Security check failed' }, { status: 403 });
  }

  return NextResponse.json({ success: true });
}
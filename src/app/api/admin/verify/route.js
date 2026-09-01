import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { password } = await request.json();
    
    // Read admin PIN dynamically from environment variables
    const validPin = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PIN || 'aniket2026';

    if (password && password.trim() === validPin.trim()) {
      return NextResponse.json({ success: true, message: 'Authenticated' });
    }

    return NextResponse.json(
      { success: false, error: 'Incorrect Passcode. Please verify your environment settings.' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server error during authentication' }, { status: 500 });
  }
}

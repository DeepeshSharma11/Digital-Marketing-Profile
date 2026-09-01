import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'ml_default';

    if (!cloudName) {
      return NextResponse.json({ error: 'Cloudinary cloud name not configured in environment' }, { status: 500 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Data = `data:${file.type};base64,${buffer.toString('base64')}`;

    // Upload via Cloudinary REST API using upload preset
    const uploadBody = new FormData();
    uploadBody.append('file', base64Data);
    uploadBody.append('upload_preset', uploadPreset);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
      method: 'POST',
      body: uploadBody
    });

    const data = await res.json();

    if (!res.ok) {
      // Return local data URL fallback if upload preset needs to be enabled in Cloudinary console
      return NextResponse.json({
        url: base64Data,
        secure_url: base64Data,
        public_id: `local-${Date.now()}`,
        status: 'local_preview'
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

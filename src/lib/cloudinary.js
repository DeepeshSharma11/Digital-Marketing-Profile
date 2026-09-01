// Cloudinary Client-side & API upload utility
export async function uploadToCloudinary(file) {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return {
        url: data.secure_url || data.url,
        public_id: data.public_id,
        width: data.width,
        height: data.height,
      };
    }
  } catch (err) {
    console.warn('API upload failed, using local file reader:', err);
  }

  // Fallback to local FileReader
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve({
        url: reader.result,
        secure_url: reader.result,
        public_id: `local-${Date.now()}`,
        isMock: true
      });
    };
    reader.readAsDataURL(file);
  });
}

export function getOptimizedImageUrl(publicIdOrUrl, options = { width: 800, quality: 'auto' }) {
  if (!publicIdOrUrl) return '';
  if (publicIdOrUrl.startsWith('data:') || publicIdOrUrl.startsWith('http')) {
    return publicIdOrUrl;
  }
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) return publicIdOrUrl;
  return `https://res.cloudinary.com/${cloudName}/image/upload/q_${options.quality},w_${options.width},f_auto/${publicIdOrUrl}`;
}

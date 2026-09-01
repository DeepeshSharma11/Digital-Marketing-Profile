import './globals.css';

export const metadata = {
  title: 'Aniket Pal | Professional Social Media Manager & Growth Expert',
  description: 'Grow your business with smart strategies, engaging content, and real results. Specializing in Instagram, YouTube, Facebook, Video Editing, and viral Reels.',
  keywords: 'Social Media Manager, Aniket Pal, Digital Marketing Bareilly, Instagram Growth, YouTube SEO, Video Editing, Content Creator',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: ['/favicon.png']
  },
  openGraph: {
    title: 'Aniket Pal - Social Media Management & Marketing',
    description: 'Smart Strategies. Engaging Content. Real Results. Grow your online presence today.',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFC] text-slate-900 min-h-screen selection:bg-amber-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}

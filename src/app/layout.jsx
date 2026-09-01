import './globals.css';

export const metadata = {
  title: 'Aniket Pal | Professional Social Media Manager & Growth Expert',
  description: 'Grow your business with smart strategies, engaging content, and real results. Specializing in Instagram, YouTube, Facebook, Video Editing, and viral Reels.',
  keywords: 'Social Media Manager, Aniket Pal, Digital Marketing Bareilly, Instagram Growth, YouTube SEO, Video Editing, Content Creator',
  openGraph: {
    title: 'Aniket Pal - Social Media Management & Marketing',
    description: 'Smart Strategies. Engaging Content. Real Results. Grow your online presence today.',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-slate-100 min-h-screen selection:bg-brand-yellow selection:text-black">
        {children}
      </body>
    </html>
  );
}

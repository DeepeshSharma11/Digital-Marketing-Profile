import './globals.css';

export const metadata = {
  title: 'Aniket Pal | Professional Social Media Manager & Growth Expert',
  description: 'Grow your business with smart strategies, engaging content, and real results. Specializing in Instagram, YouTube, Facebook, Video Editing, and viral Reels.',
  keywords: 'Social Media Manager, Aniket Pal, Digital Marketing Bareilly, Instagram Growth, YouTube SEO, Video Editing, Content Creator, Deepesh Sharma, Focitech',
  authors: [
    { name: 'Aniket Pal', url: 'https://instagram.com' },
    { name: 'Deepesh Sharma', url: 'https://focitech.in/deepesh-sharma' }
  ],
  creator: 'Deepesh Sharma (CTO & Co-Founder, Focitech.in)',
  publisher: 'Focitech.in',
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Bareilly',
    'geo.position': '28.3670;79.4304',
    'ICBM': '28.3670, 79.4304',
    'author-profile': 'https://focitech.in/deepesh-sharma',
    'developer': 'Deepesh Sharma (Focitech)'
  },
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
    locale: 'en_IN',
    siteName: 'Aniket Pal Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aniket Pal | Social Media Manager & Growth Expert',
    description: 'Smart Strategies. Engaging Content. Real Results.',
    creator: '@deepeshsharma'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://aniketpal.focitech.in/#website',
      'url': 'https://aniketpal.focitech.in',
      'name': 'Aniket Pal - Social Media Agency',
      'description': 'Social Media Growth, Reels Editing, Content Creation & Viral Strategies in Bareilly',
      'author': {
        '@type': 'Person',
        'name': 'Deepesh Sharma',
        'jobTitle': 'CTO & Co-Founder',
        'url': 'https://focitech.in/deepesh-sharma',
        'worksFor': {
          '@type': 'Organization',
          'name': 'Focitech',
          'url': 'https://focitech.in'
        }
      },
      'creator': {
        '@type': 'Person',
        'name': 'Deepesh Sharma',
        'jobTitle': 'CTO & Co-Founder, Focitech',
        'url': 'https://focitech.in/deepesh-sharma'
      },
      'accountablePerson': {
        '@type': 'Person',
        'name': 'Deepesh Sharma',
        'url': 'https://focitech.in/deepesh-sharma'
      }
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://aniketpal.focitech.in/#localbusiness',
      'name': 'Aniket Pal - Digital Marketing & Social Media Management',
      'telephone': '+91 95484 27447',
      'email': 'aniketpal95484@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Bareilly',
        'addressRegion': 'Uttar Pradesh',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 28.3670,
        'longitude': 79.4304
      },
      'sameAs': [
        'https://instagram.com',
        'https://youtube.com',
        'https://facebook.com'
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFC] text-slate-900 min-h-screen selection:bg-amber-400 selection:text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

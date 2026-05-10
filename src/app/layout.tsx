import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Sage Creek Kitchen | Farm-to-Table Dining in Twin Falls, Idaho',
    template: '%s | Sage Creek Kitchen',
  },
  description: 'Upscale-casual farm-to-table restaurant in Twin Falls, Idaho. Seasonal menus featuring local Idaho ingredients, an Idaho wine program, and private dining. Reserve your table today.',
  keywords: ['restaurant Twin Falls Idaho', 'farm to table Twin Falls', 'fine dining Twin Falls', 'Idaho restaurant', 'Magic Valley dining'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sagecreekkitchen.worker-bee.app',
    siteName: 'Sage Creek Kitchen',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

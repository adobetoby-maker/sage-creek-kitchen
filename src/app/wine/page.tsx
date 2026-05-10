import type { Metadata } from 'next';
import WinePageContent from '@/components/wine/WinePageContent';

export const metadata: Metadata = {
  title: 'Wine Program',
  description:
    'Idaho wines curated from the Snake River Valley AVA. Our cellar celebrates local Idaho producers alongside Pacific Northwest and European selections.',
};

export default function WinePage() {
  return <WinePageContent />;
}

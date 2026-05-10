import type { Metadata } from 'next';
import OurStoryContent from '@/components/our-story/OurStoryContent';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    "Meet Chef Elena Vasquez and the team behind Sage Creek Kitchen. 12 years of farm-to-table dining in Twin Falls, Idaho, sourcing from Idaho's finest farms and producers.",
};

export default function OurStoryPage() {
  return <OurStoryContent />;
}

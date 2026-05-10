import HeroSection from '@/components/home/HeroSection';
import FeaturedDishes from '@/components/home/FeaturedDishes';
import StorySection from '@/components/home/StorySection';
import MenuPreview from '@/components/home/MenuPreview';
import WineSection from '@/components/home/WineSection';
import ReservationCTA from '@/components/home/ReservationCTA';
import HoursStrip from '@/components/home/HoursStrip';
import EventsMention from '@/components/home/EventsMention';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedDishes />
      <StorySection />
      <MenuPreview />
      <WineSection />
      <ReservationCTA />
      <HoursStrip />
      <EventsMention />
    </>
  );
}

import dynamic from 'next/dynamic';
import Logo from '@/components/logo';
import ComingSoon from '@/components/coming-soon';
import SubscriptionForm from '@/components/subscription-form';
import BookButton from '@/components/book-button';
import AnimatedQuote from '@/components/animated-quote';
import Footer from '@/components/footer';

const Preloader = dynamic(() => import('@/components/preloader'), {
  ssr: false
});

export const metadata = {
  title: 'Ish Kumar - Visuals and Designs | Coming Soon - Pre-Opening Offers',
  description: 'Professional video editing and VFX services by Ish Kumar. Take advantage of our exclusive pre-opening offers and be the first to experience our services.',
  openGraph: {
    title: 'Ish Kumar - Visuals and Designs | Coming Soon - Pre-Opening Offers',
    description: 'Professional video editing and VFX services by Ish Kumar. Take advantage of our exclusive pre-opening offers and be the first to experience our services.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Ish Kumar - Visuals and Designs Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ish Kumar - Visuals and Designs | Coming Soon - Pre-Opening Offers',
    description: 'Professional video editing and VFX services by Ish Kumar. Take advantage of our exclusive pre-opening offers and be the first to experience our services.',
    images: ['/logo.png'],
  },
};

export default function Home() {
  return (
    <main className="gradient-background min-h-screen flex flex-col items-center justify-between py-8 sm:py-12 px-4 sm:px-8 md:px-16">
      <Preloader />
      <div className="w-full max-w-6xl mx-auto flex flex-col min-h-screen opacity-0 page-reveal">
        <header className="w-full flex justify-center pt-4 sm:pt-6 -pb-16 sm:-pb-24">
          <Logo />
        </header>
        
        <div className="flex-grow flex flex-col items-center justify-center space-y-8 sm:space-y-12 w-full max-w-2xl mx-auto -mt-16 sm:-mt-28">
          <ComingSoon />
          <SubscriptionForm />
          <div className="mt-6 sm:mt-8">
            <BookButton />
          </div>
          <AnimatedQuote />
        </div>
        
        <Footer />
      </div>
    </main>
  );
}

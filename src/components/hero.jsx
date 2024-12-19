import Image from "next/image";
import { Button } from '@/components/ui/button';
import BgImage from '@/assets/main-bg.png';

export default function Hero() {
  return (
    <div className="relative h-[100vh] w-full">
      {/* Background Image */}
      <Image
        src={BgImage}
        alt="Image"
        width="1920"
        height="1080"
        className="h-[100vh] w-full object-cover dark:brightness-[0.5]"
      />
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
        Decor That Defines Perfection
        </h1>
        <p className="text-xl font-sans text-white mb-8">
          From weddings to corporate gatherings, we bring your vision to life
        </p>
        <Button variant="danger" size="lg" asChild>
          <a href="#contact">Start Planning Your Event</a>
        </Button>
      </div>
    </div>
  );
}

import Image from "next/image";
import BgImage from '@/assets/about-image.png';

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row">
        {/* Left Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <div className="w-3/4 lg:w-2/3">
            <Image
              src={BgImage}
              alt="About Us Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center lg:pl-10 mt-10 lg:mt-0">
          <p className="text-2xl font-sans text-black mb-2">Welcome to</p>
          <h2 className="text-4xl font-serif text-red-900 mb-6">Cellestial Events</h2>
          <p className="text-lg text-black leading-relaxed">
            Cellestial event management company specializing in celebrity decoration services, 
            offering the best wedding planning and decorating services in Mumbai. 
            Our dedicated team ensures flawless execution and attention to detail for every occasion.
          </p>
          <p className="text-lg text-black leading-relaxed mt-4">
            With a focus on perfection, we bring your dream celebration to life. 
            As the top choice for celebrity decorators, we create unforgettable experiences that reflect sophistication and style.
          </p>
          <p className="text-lg text-black leading-relaxed mt-4">
            Trust us to turn your special day into a magical and memorable event. 
            Choose us as your preferred wedding planner and decorator in Malad for an unparalleled blend of creativity and expertise in celebrity event decoration.
          </p>
        </div>
      </div>
    </section>
  );
}

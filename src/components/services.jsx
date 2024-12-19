import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cake, GlassWater, PartyPopper } from 'lucide-react';

const services = [
  {
    title: "Wedding Planning",
    description: "Create the wedding of your dreams with our expert planning and decoration services.",
    icon: GlassWater
  },
  {
    title: "Birthday Celebrations",
    description: "Make your birthday extra special with our themed decorations and event management.",
    icon: Cake
  },
  {
    title: "Corporate Events",
    description: "Impress your clients and motivate your team with our professional corporate event services.",
    icon: PartyPopper
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-slate-900 to-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl font-extrabold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-gray-700 hover:border-red-500 transition-colors duration-300"
            >
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-r from-red-900 to-red-700 p-4 rounded-full">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="mt-4 text-xl font-bold text-white group-hover:text-red-500">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className=" items-center text-center">
                <CardDescription className="text-gray-300 mt-2 group-hover:text-gray-100">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

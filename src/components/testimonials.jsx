import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  {
    name: "Manish Shinde",
    event: "Wedding Ceremony",
    quote: "Cellestial Events made our wedding day absolutely perfect. Their attention to detail was impeccable!"
  },
  {
    name: "Shilpa Rao",
    event: "Corporate Gala",
    quote: "The team's professionalism and creativity truly elevated our annual corporate gala. Highly recommended!"
  },
  {
    name: "Cleon Dsilva",
    event: "Birthday Celebration",
    quote: "My 50th birthday party was awesome, thanks to Cellestial Events's amazing decoration and planning."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-slate-900 to-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-white mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-gray-700 hover:border-red-500 transition-all duration-300"
            >
              <CardHeader className="flex flex-col ">
                <CardTitle className="text-lg font-bold text-white">{testimonial.name}</CardTitle>
                <p className="text-sm text-gray-300">{testimonial.event}</p>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-200 italic group-hover:text-white transition-all duration-300">
                &quot;{testimonial.quote}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

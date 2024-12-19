import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Info from '@/components/socialmedia'
import About from '@/components/about'

export default function Home() {
  return (
    <div className=" min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 z-10 w-full">
      <Info />
      <Header />
      </div>
      <main>
        <Hero />
        <About/>
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


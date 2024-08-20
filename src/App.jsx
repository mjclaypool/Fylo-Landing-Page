import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import LearnMore from './components/LearnMore';
import Testimonials from './components/Testimonials';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import './index.css'

function App() {
  return (
    <main className="bg-dark-blue-main w-[100vw] min-h-[100vh]">
      <Header />
      <Hero />
      <Features />
      <LearnMore />
      <Testimonials />
      <SignUp />
      <Footer />
    </main>
  )
}

export default App
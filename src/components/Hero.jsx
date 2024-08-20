import heroImg from "../../images/illustration-intro.png";

export default function Hero() {
  return (
    <div className="flex flex-col text-white items-center text-center mt-16 mb-24">
      <img src={heroImg} alt="Introduction illustration" className="h-[530px] object-contain mb-8" />
      <h1 className="font-raleway font-bold text-[40px] max-w-[700px]">All your files in one secure location, accessible anywhere.</h1>
      <p className="font-open-sans text-xl max-w-[620px] mt-10 mb-8">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
      <button className="bg-cyan-400 px-24 py-4 rounded-full font-semibold hover:bg-cyan-accent" type="button">Get Started</button>
    </div>
  )
}
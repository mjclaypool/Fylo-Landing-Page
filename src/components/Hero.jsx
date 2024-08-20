import heroImg from "../../images/illustration-intro.png";

export default function Hero() {
  return (
    <div className="flex flex-col text-white items-center text-center lg:mt-2 mb-24 lg:mb-32 px-8">
      <img src={heroImg} alt="Introduction illustration" className="w-[714px] object-contain mb-9" />
      <h1 className="font-raleway font-bold text-2xl leading-normal lg:text-[40px] lg:max-w-[700px]">All your files in one secure location, accessible anywhere.</h1>
      <p className="font-open-sans text-sm text-stone-200 lg:text-xl lg:max-w-[620px] mt-4 lg:mt-10 mb-8 px-2">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
      <button className="bg-cyan-400 px-20 lg:px-24 py-3 lg:py-4 rounded-full font-semibold hover:bg-cyan-accent" type="button">Get Started</button>
    </div>
  )
}
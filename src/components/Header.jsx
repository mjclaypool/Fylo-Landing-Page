import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between h-16 lg:h-[190px] gap-8 items-center px-6 lg:px-20 mb-6 lg:mb-0">
      <img src={logo} alt="Fylo company logo" className="h-[24px] lg:h-[52px] object-contain" />
      <nav className="flex gap-6 lg:gap-14 justify-between font-raleway text-xs lg:text-base text-stone-200">
        <button className="hover:text-white hover:underline hover:font-semibold" type="button">Features</button>
        <button className="hover:text-white hover:underline hover:font-semibold" type="button">Team</button>
        <button className="hover:text-white hover:underline hover:font-semibold" type="button">Sign In</button>
      </nav>
    </header>
  )
}
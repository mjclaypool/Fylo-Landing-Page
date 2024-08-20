import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between h-[130px] gap-8 items-center px-6 lg:px-20">
      <img src={logo} alt="Fylo company logo" className="h-[52px] object-contain" />
      <nav className="flex w-[276px] justify-between font-raleway text-base text-stone-200">
        <button className="hover:text-white hover:underline hover:font-semibold" type="button">Features</button>
        <button className="hover:text-white hover:underline hover:font-semibold" type="button">Team</button>
        <button className="hover:text-white hover:underline hover:font-semibold" type="button">Sign In</button>
      </nav>
    </header>
  )
}
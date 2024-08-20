import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between h-[130px] gap-8 items-center px-6 lg:px-40">
      <div className="shrink-0">
        <img src={logo} alt="Fylo company logo" />
      </div>
      <nav className="flex gap-10 font-raleway text-sm text-stone-300">
        <button className="p-1 hover:text-white hover:underline" type="button">Features</button>
        <button className="p-1 hover:text-white hover:underline" type="button">Team</button>
        <button className="p-1 hover:text-white hover:underline mr-6" type="button">Sign In</button>
      </nav>
    </header>
  )
}
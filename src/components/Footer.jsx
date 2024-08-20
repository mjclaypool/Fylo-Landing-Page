import logo from "../../images/logo.svg";
import locIcon from "../../images/icon-location.svg";
import phoneIcon from "../../images/icon-phone.svg";
import emailIcon from "../../images/icon-email.svg";

export default function Footer() {
  const navLinks = ["About Us", "Jobs", "Press", "Blog", "Contact Us", "Terms", "Privacy"];

  return (
    <footer className="flex flex-col gap-12 justify-center bg-dark-blue-foot text-stone-300 h-[440px] px-6 lg:px-28">
      <img src={logo} alt="Fylo company logo" className="self-start h-8 object-contain" />
      <div className="flex justify-between">
        <div className="flex gap-6 pr-6">
          <img src={locIcon} alt="Location Icon" className="h-[18px] object-contain mt-2" />
          <p className="max-w-[320px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className="flex flex-col gap-3 px-6">
          <div className="flex items-center gap-6">
            <img src={phoneIcon} alt="Phone Icon" className="h-[18px] object-contain mt-1" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="flex items-center gap-6">
            <img src={emailIcon} alt="Email Icon" className="h-4 object-contain mt-1" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <nav className="flex flex-col flex-wrap h-[150px] gap-2 mr-24">
          {navLinks.map(elem => (
            <p key={elem} className="cursor-pointer mx-8 hover:text-white">{elem}</p>
          ))}
        </nav>
        <div className="flex gap-3 pl-6">
          <div className="w-8 h-8 rounded-full border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full border-2 border-white"></div>
          <div className="w-8 h-8 rounded-full border-2 border-white"></div>
        </div>
      </div>
    </footer>
  )
}
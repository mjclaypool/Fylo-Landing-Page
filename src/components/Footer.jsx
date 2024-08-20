import SignUp from "./SignUp";

import logo from "../../images/logo.svg";
import locIcon from "../../images/icon-location.svg";
import phoneIcon from "../../images/icon-phone.svg";
import emailIcon from "../../images/icon-email.svg";

export default function Footer() {
  const navLinks = ["About Us", "Jobs", "Press", "Blog", "Contact Us", "Terms", "Privacy"];

  return (
    <footer className="relative flex flex-col gap-10 lg:gap-12 items-center justify-center bg-dark-blue-foot text-stone-300 lg:h-[440px] px-8 lg:px-28">
      <SignUp />
      <img src={logo} alt="Fylo company logo" className="self-start h-12 lg:h-8 mx-2 lg:mx-0 mt-60 lg:mt-32 object-contain" />
      <div className="flex flex-col lg:flex-row lg:justify-between w-full">
        <div className="flex gap-6 lg:pr-6 mb-3">
          <img src={locIcon} alt="Location Icon" className="h-[18px] object-contain mt-2" />
          <p className="max-w-[320px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-3 lg:px-6">
          <div className="flex items-center gap-6">
            <img src={phoneIcon} alt="Phone Icon" className="h-[18px] object-contain mt-1" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="flex items-center gap-6">
            <img src={emailIcon} alt="Email Icon" className="h-4 object-contain mt-1" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <nav className="flex flex-col lg:flex-wrap lg:h-[150px] gap-3 lg:gap-2 my-20 lg:my-0 lg:mr-24">
          {navLinks.map(elem => (
            <div key={elem}>
              <p className="cursor-pointer lg:mx-8 hover:text-white">{elem}</p>
              {elem == "Blog" && <div className="lg:hidden h-10" />}
            </div>
          ))}
        </nav>
        <div className="flex gap-3 justify-center lg:justify-start pb-12 lg:pb-0 lg:pl-6">
          <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border-2 border-white"></div>
          <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border-2 border-white"></div>
          <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border-2 border-white"></div>
        </div>
      </div>
    </footer>
  )
}
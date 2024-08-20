import learnImg from "../../images/illustration-stay-productive.png";
import arrowIcon from "../../images/icon-arrow.svg";

export default function LearnMore() {
  return (
    <div className="flex flex-col lg:flex-row gap-9 lg:gap-16 items-center my-28 lg:my-24 px-7 lg:px-24">
      <img src={learnImg} alt="Stay productive and learn more illustration" className="object-contain" />
      <div>
        <h2 className="font-raleway font-bold text-lg lg:text-[40px] text-white lg:max-w-[350px] leading-tight lg:mt-14">Stay productive, wherever you are</h2>
        <p className="font-open-sans text-sm lg:text-base text-stone-200 my-4 lg:mt-5">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p className="font-open-sans text-sm lg:text-base text-stone-200 my-4 lg:mb-5">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <button className="flex items-center gap-1 border-b-2 border-b-cyan-accent hover:border-b-white">
          <p className="font-open-sans text-xs lg:text-base py-1 text-cyan-accent hover:text-white">See how Fylo works</p>
          <img src={arrowIcon} alt="Arrow icon" className="h-[16px] object-contain" />
        </button>
      </div>
    </div>
  )
}
import learnImg from "../../images/illustration-stay-productive.png";
import arrowIcon from "../../images/icon-arrow.svg";

export default function LearnMore() {
  return (
    <div className="flex gap-16 items-center my-16 px-24">
      <img src={learnImg} alt="Stay productive and learn more illustration" className="h-[465px] object-contain" />
      <div>
        <h2 className="font-raleway font-bold text-[40px] text-white max-w-[350px] leading-tight">Stay productive, wherever you are</h2>
        <p className="font-open-sans text-stone-200 my-4">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p className="font-open-sans text-stone-200 my-4">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <button className="flex items-center gap-1 border-b-2 border-b-cyan-accent hover:border-b-white">
          <p className="font-open-sans text-cyan-accent hover:text-white">See how Fylo works</p>
          <img src={arrowIcon} alt="Arrow icon" className="h-[16px] object-contain" />
        </button>
      </div>
    </div>
  )
}
import { useRef, useState } from "react";

export default function SignUp() {
  const [isInvalid, setIsInvalid] = useState(false);
  const email = useRef();

  function handleSubmit(event) {
    setIsInvalid(false);
    event.preventDefault();

    if(!email.current.value.includes('@') || !email.current.value.includes('.')){
      setIsInvalid(true);
    }
  }

  return (
    <div className="absolute -top-44 lg:-top-36 flex justify-center">
      <div className="flex flex-col items-center text-center lg:max-w-[864px] px-8 lg:px-16 pt-8 lg:pt-12 pb-10 lg:pb-6 bg-dark-blue-intro rounded-lg shadow-lg">
        <h2 className="font-raleway font-bold text-lg lg:text-[32px] text-white">Get early access today</h2>
        <p className="font-open-sans text-sm text-stone-200 mt-4 mb-8 lg:px-12">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <div className="w-full">
          <form className="flex flex-col lg:flex-row gap-1 lg:gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <input
                name="email"
                ref={email}
                placeholder="email@example.com"
                className="lg:w-[490px] font-open-sans placeholder:text-stone-300 text-xs lg:text-sm rounded-full px-6 py-4 lg:py-3"
              />
              {isInvalid ?
                <p className="self-start font-open-sans text-xs text-red-accent py-1 pl-6">Please enter a valid email address</p>
              :
              <div className="h-6" />
              }
            </div>
            <button
              className="font-raleway lg:max-h-[44px] bg-cyan-400 text-sm text-white px-8 py-4 lg:py-3 rounded-full font-semibold hover:bg-cyan-accent"
              type="submit"
            >
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
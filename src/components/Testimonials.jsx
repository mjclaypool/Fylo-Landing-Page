import profile1 from "../../images/profile-1.jpg";
import profile2 from "../../images/profile-2.jpg";
import profile3 from "../../images/profile-3.jpg";

export default function Testimonials() {
  const testimonialsList = [
    {
      id: "1",
      image: profile1,
      name: "Satish Patel",
      tagLine: "Founder & CEO, Huddle",
      quote: "Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well-oiled collaboration machine.",
    },
    {
      id: "2",
      image: profile2,
      name: "Bruce McKenzie",
      tagLine: "Founder & CEO, Huddle",
      quote: "Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well-oiled collaboration machine.",
    },
    {
      id: "3",
      image: profile3,
      name: "Iva Boyd",
      tagLine: "Founder & CEO, Huddle",
      quote: "Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well-oiled collaboration machine.",
    },
  ]

  return (
    <div className="flex flex-col items-center lg:flex-row justify-center gap-6 lg:gap-10 my-44 px-12 lg:px-24">
      {testimonialsList.map(card => (
        <div key={card.id} className="max-w-[362px] bg-dark-blue-test font-open-sans text-stone-200 pt-6 lg:pt-10 px-6 lg:px-8">
          <p className="text-[10px] lg:text-sm">{card.quote}</p>
          <div className="flex gap-2 items-center py-6">
            <img src={card.image} alt="Profile picture" className="h-6 w-6 object-contain rounded-full" />
            <div>
              <h4 className="text-[10px] text-white font-semibold tracking-wider">{card.name}</h4>
              <h5 className="text-[8px] tracking-wider">{card.tagLine}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
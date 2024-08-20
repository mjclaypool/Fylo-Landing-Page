import accessIcon from "../../images/icon-access-anywhere.svg";
import securityIcon from "../../images/icon-security.svg";
import collabIcon from "../../images/icon-collaboration.svg";
import storageIcon from "../../images/icon-any-file.svg";

export default function Features() {
  const featuresList = [
    {
      id: "1",
      image: accessIcon,
      alt: "Access Anywhere Icon",
      title: "Access your files, anywhere",
      details: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
    },
    {
      id: "2",
      image: securityIcon,
      alt: "Security Icon",
      title: "Security you can trust",
      details: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {
      id: "3",
      image: collabIcon,
      alt: "Collaboration Icon",
      title: "Real-time collaboration",
      details: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
    },
    {
      id: "4",
      image: storageIcon,
      alt: "Any File Storage Icon",
      title: "Store any type of file",
      details: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    },
  ]

  return (
    <div className="flex flex-wrap justify-center lg:px-40">
      {featuresList.map(feature => (
        <div key={feature.id} className="flex flex-col w-[356px] items-center text-center text-white py-12 mx-20">
          <img src={feature.image} alt={feature.alt} className="h-[88px] w-[91px] object-contain mb-2" />
          <h3 className="font-raleway font-semibold text-lg my-2">{feature.title}</h3>
          <p className="font-open-sans text-sm text-stone-200">{feature.details}</p>
        </div>
      ))}
    </div>
  )
}
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
function SocialMedia() {
  const linkedIn: string =
    "https://www.linkedin.com/in/nour-alhoussein-b3267420b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  const whatsapp: string = "https://wa.me/qr/NTELWQSPT3SQJ1";
  const gmailLink: string =
    "https://mail.google.com/mail/?view=cm&fs=1&to=nouralhoussein95@gmail.com&su=Hello&body=This%20is%20a%20test";
  const phone: string = "tel:+963932859935";
  return (
    <div className="w-full flex flex-row items-center justify-center">
      <a
        href={linkedIn}
        target="_blank"
        className="font-rubik text-xl px-[15px] text-secanderyColor hover:text-[#B37CEB]"
      >
        <FaLinkedin />
      </a>
      <a
        href={whatsapp}
        target="_blank"
        className="font-rubik text-xl px-[15px] text-secanderyColor hover:text-[#B37CEB]"
      >
        <IoLogoWhatsapp />
      </a>
      <a
        href={gmailLink}
        target="_blank"
        className="font-rubik text-2xl px-[15px] text-secanderyColor hover:text-[#B37CEB]"
      >
        <MdOutgoingMail />
      </a>
      <a
        href={phone}
        target="_blank"
        className="font-rubik text-2xl px-[15px] text-secanderyColor hover:text-[#B37CEB]"
      >
        <IoCallSharp />
      </a>
    </div>
  );
}

export default SocialMedia;

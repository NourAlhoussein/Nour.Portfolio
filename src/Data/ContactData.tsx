import type { Media } from "../types";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
const Medias: Media[] = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/nour-alhoussein-b3267420b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: <FaLinkedin />,
  },
  { id: 1, link: "https://wa.me/qr/NTELWQSPT3SQJ1", icon: <IoLogoWhatsapp /> },
  {
    id: 2,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=nouralhoussein95@gmail.com&su=Hello&body=This%20is%20a%20test",
    icon: <MdOutgoingMail />,
  },
  { id: 3, link: "tel:+963932859935", icon: <IoCallSharp /> },
];

export default Medias;

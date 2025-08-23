import { SlLocationPin } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import cvFile from "../assets/pdf/Nour Alhoussein.pdf";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
function Contact() {
  return (
    <div className="py-[50px] w-full bg-primaryColor text-secanderyColor">
      <div className="w-full h-[1px] bg-[#B37CEB] mb-[50px]"></div>
      <div className="flex flex-col items-center justify-start text-center  sm:px-[30px] px-[15px]">
        <div className="sm:text-4xl text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B6EF6] to-[#B37CEB]">
          Contact
        </div>
        <div className="mt-[30px] sm:text-lg text-sm">
          Interested in working together? Let's have a conversation.
        </div>
        <div className="flex flex-row items-center justify-center mt-[30px]">
          <SlLocationPin />
          <span className="ml-[10px]">Syria , Rif Damascus</span>
        </div>
        <div className="flex flex-row items-center justify-center mt-[20px]">
          <MdEmail />
          <span className="ml-[10px]">nouralhoussein95@gmail.com</span>
        </div>
        <a
          href="https://wa.me/963932859935"
          className="flex flex-row items-center justify-center mt-[20px]"
        >
          <FaPhoneAlt />
          <span className="ml-[10px]">963 932 859 935</span>
        </a>
        <a
          href={cvFile}
          download="Nour Alhoussein.pdf"
          className="flex flex-row items-center justify-center bg-thirdColor sm:p-[15px] p-[10px] sm:text-lg text-base rounded-md cursor-pointer hover:border-1
         hover:border-secanderyColor mt-[20px]"
        >
          <BsFileEarmarkPdfFill />
          <span className="ml-[10px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#6B6EF6] to-[#B37CEB]">
            View Resume
          </span>
        </a>
      </div>
    </div>
  );
}

export default Contact;

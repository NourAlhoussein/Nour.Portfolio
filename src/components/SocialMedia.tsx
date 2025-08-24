import Medias from "../Data/ContactData";
import { motion } from "framer-motion";
function SocialMedia() {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };
  return (
    <div className="w-full flex flex-row items-center justify-center">
      {Medias.map((media, index) => {
        return (
          <motion.a
            key={index}
            href={media.link}
            target="_blank"
            className="font-rubik text-xl px-[15px] text-secanderyColor hover:text-[#B37CEB]"
            variants={item}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true }}
          >
            {media.icon}
          </motion.a>
        );
      })}
    </div>
  );
}

export default SocialMedia;

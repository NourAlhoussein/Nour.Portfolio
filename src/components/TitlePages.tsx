import { type Title } from "../types";
import { motion } from "framer-motion";
function TitlePages({ name }: Title) {
  return (
    <>
      <motion.div
        className="text-center sm:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6B6EF6] to-[#B37CEB]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {name}
      </motion.div>
    </>
  );
}

export default TitlePages;

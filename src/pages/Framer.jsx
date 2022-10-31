import { motion } from "framer-motion";

export default function Framer() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1.2 }}
      transition={{ duration: 2.5 }}
      className="box"
    >
      <h1>Welcome To Haley Toyota</h1>
      <h2>Stop By And Say Hello!</h2>
      <h3>Chris Kavanagh</h3>
    </motion.div>
  );
}

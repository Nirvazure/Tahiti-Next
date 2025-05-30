"use client";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const bgStyle = {
    // backgroundImage: `url(${FooterImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={bgStyle}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="container text-center space-y-10 py-10"
      >
        <div className="space-y-4">
          <p className="text-3xl md:text-4xl font-bold">欢迎加入我们的大家庭</p>
          <p>YQYMONs</p>
        </div>
        <div className=" space-y-5">
          <button className="primary-btn text-black">点击加入</button>
          <div className="flex flex-row justify-center gap-3">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;

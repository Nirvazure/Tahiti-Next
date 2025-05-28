"use client";

import React from "react";

import { motion } from "framer-motion";
import { slideUp } from "@/util";

import "./Gallery.css";

const Gallery = () => {
  return (
    <motion.div
      className="wrapper"
      variants={slideUp(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="shell">
        <div className="content">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;

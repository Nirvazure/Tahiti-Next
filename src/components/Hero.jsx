"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "@/util";

const Hero = (props) => {
  const {
    label = "Design By YQYMONs",
    description = "",
    title = "iPad 板绘系列",
    subtitle = "海王系列",
    btnText = "了解更多",
    BannerImg = "http://yqymons-bank.oss-cn-beijing.aliyuncs.com/YQYMONs/images/shirts.png",
    left,
    scale = 110,
  } = props;

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
        {left ? (
          <>
            <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-10 md:py-0 md:px-0 md:items-start">
              <motion.h1
                variants={slideUp(0.2)}
                initial="initial"
                whileInView="animate"
                className="text-4xl xl:text-5xl font-semibold text-black/80"
              >
                {title} <br />
                <span className="text-gray-400 underline">{subtitle}</span>
              </motion.h1>
              <motion.button
                variants={slideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="primary-btn  bg-gray-900 hover:bg-lime-600  text-lime-600 hover:text-white duration-300"
              >
                {btnText}
              </motion.button>
              <div className="flex gap-3">
                <motion.div
                  variants={slideUp(0.6)}
                  initial="initial"
                  whileInView="animate"
                  className="space-y-2"
                >
                  <p className="font-semibold text-lg">Design Tools</p>
                  <p>{description}</p>
                </motion.div>
                <motion.div
                  variants={slideUp(0.8)}
                  initial="initial"
                  whileInView="animate"
                  className="space-y-2"
                >
                  <p className="font-semibold text-lg">CSS Framework</p>
                  <p>Motion</p>
                </motion.div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <motion.img
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src={BannerImg}
                alt=""
                className={`w-[90%] md:w-[850px] xl:w-[600px] md:!scale-${scale}`}
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center items-center">
              <motion.img
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src={BannerImg}
                alt=""
                className={`w-[90%] md:w-[550px] xl:w-[600px] md:!scale-${scale}`}
              />
            </div>
            <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pl-10 md:py-0 md:px-0 md:items-start xl:max-w-[400px] mx-auto">
              <motion.p
                variants={slideUp(0.2)}
                initial="initial"
                whileInView="animate"
                className="uppercase"
              >
                {label}
              </motion.p>
              <motion.h1
                variants={slideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="text-2xl xl:text-3xl font-semibold text-black/80"
              >
                {title} <br />
                <span className="text-gray-400 underline text-4xl xl:text-5xl">
                  {subtitle}
                </span>
              </motion.h1>
              <motion.button
                variants={slideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn hover:bg-black  text-white hover:text-white duration-300"
              >
                了解更多
              </motion.button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;

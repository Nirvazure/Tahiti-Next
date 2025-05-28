"use client";
import { motion } from "framer-motion";

const players = [
  {
    name: "SandM",
  },
  {
    name: "HyBarain",
  },
  {
    name: "Nirvazure",
  },
  {
    name: "TinyRed",
  },
  {
    name: "Uncle",
  },
];

const Banner = () => {
  return (
    <div className="container py-12 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-12 flex justify-between items-center"
      >
        <h1 className="text-4xl xl:text-5xl font-bold max-w-[550px]">
          YQYMONs
          <br />
          <span className="text-gray-400 underline">KPL Legend Team</span>
        </h1>
        <p className="hidden md:block">
          Notified to Spark your <br></br>
          <span className="text-gray-400 underline">Balance</span>{" "}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="https://yqymons-bank.oss-cn-beijing.aliyuncs.com/YQYMONs/images/bg.jpg"
            alt=""
            className="w-[900px] mx-auto md:max-w-[800px]"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-5 gap-8">
        {players.map((player, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-[100px] mx-auto space-y-4"
          >
            <img
              src={`https://yqymons-bank.oss-cn-beijing.aliyuncs.com/YQYMONs/images/${
                i + 1
              }.jpg`}
              alt=""
              className="w-14"
            />
            <p className="font-semibold text-xl">{player.name}</p>
            <p className="uppercase text-gray-500 pl-6 border-l-2">
              YQYMONs ADCarry
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

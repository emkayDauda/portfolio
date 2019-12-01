import * as React from "react";
import { motion } from "framer-motion";

import '../Splash.css'

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

export default () => (
  <div id='body'>
    <div className="container">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 170 170"
      className="item"
    >
      <motion.path
        d="M2 167V5L64 67L126 5V167H142.5H159V86M159 86V5M159 86L240 5M159 86L240 167"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 3, ease: "easeInOut" },
          fill: { duration: 3, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  </div>
  </div>
);

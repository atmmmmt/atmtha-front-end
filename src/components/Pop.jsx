import React from "react";
import "../css/pop.css";
import { motion, AnimatePresence } from "framer-motion";
export default function Pop(props) {
  return (
    <AnimatePresence>
      {props.open && (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.1, delay: 0.1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => props.setOpen(false)}
          className="pop fixed w-full h-full left-0 top-0 backdrop-filter-blur z-40 bg-[#73737336]  blur-[7.5px]"
        ></motion.div>
      )}
    </AnimatePresence>
  );
}

import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Pop from "../Pop";
import "../../css/drop.css";
const DrobUnits = (props) => {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState(props.label);
  const [valueUnit, setValueUnit] = useState(props.value);
  useEffect(() => {
    props.updateValue(valueUnit);
  }, [valueUnit, props]);
  useEffect(() => {
    setValueUnit(null);
    setLabel(props.label);
  }, [props.sideId]);
  return (
    <>
      <Pop open={open} setOpen={setOpen} delay={0.001 * 9} />
      <div className=" flex items-center justify-center ">
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors"
          >
            <span className="font-medium text-sm"> {label}</span>
            <motion.span variants={iconVariants}>
              <FiChevronDown />
            </motion.span>
          </button>

          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className=" flex flex-col max-h-[180px] gap-2 p-2 rounded-lg bg-[white] shadow-xl absolute z-[41] top-[120%] left-[50%]  text-center overflow-auto"
          >
            <div className="dropul h-full pl-[4px] overflow-auto">
              {props.text.map((e, index) => (
                <Option
                  style={{
                    // transition: "0.0001s",
                    opacity: `${open ? "0" : "1"}`,
                    display: `${!open ? "block" : "none"}`,
                  }}
                  key={index}
                  setOpen={setOpen}
                  setLabel={setLabel}
                  setValue={setValueUnit}
                  text={e}
                />
              ))}
            </div>
          </motion.ul>
        </motion.div>
      </div>
    </>
  );
};

// Inside the Option component

const Option = ({ text, setOpen, setLabel, setValue }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        setLabel(text.unitName);
        setValue(text._id); // Set the label as text.name
      }}
      className="flex items-center px-3 w-full p-2 text-[14px] font-medium whitespace-nowrap rounded-md group hover:bg-main  transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}></motion.span>
      <span className="transition-color group-hover:text-[white]">
        {text.unitName}
      </span>{" "}
      {/* Use text.name as the label */}
    </motion.li>
  );
};

export default DrobUnits;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      // duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.001,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      duration: 0.2,
      // when: "afterChildren",
      // staggerChildren: 0.001,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

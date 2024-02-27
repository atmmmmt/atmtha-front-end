import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import Pop from "../Pop";

const DrowbSubjects = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(props.value);

    return (
        <>
            <Pop open={open} setOpen={setOpen} delay={0.001 * 9} />
            <div className=" flex items-center justify-center ">
                <motion.div
                    animate={open ? "open" : "closed"}
                    className="relative"
                >
                    <button
                        onClick={() => setOpen((pv) => !pv)}
                        className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors"
                    >
                        <span className="font-medium text-sm"> {value}</span>
                        <motion.span variants={iconVariants}>
                            <FiChevronDown />
                        </motion.span>
                    </button>

                    <motion.ul
                        initial={wrapperVariants.closed}
                        variants={wrapperVariants}
                        style={{ originY: "top", translateX: "-50%" }}
                        className="flex flex-col gap-2 p-2 rounded-lg bg-[white] shadow-xl absolute z-[41] top-[120%] left-[50%]  text-center overflow-auto"
                    >
                        {props.text.map((e, index) => (
                            <Option
                                style={{
                                    // transition: "0.0001s",
                                    opacity: `${open ? "0" : "1"}`,
                                    display: `${!open ? "block" : "none"}`,
                                }}
                                key={index}
                                setOpen={setOpen}
                                setValue={setValue}
                                text={e}
                            />
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </>
    );
};

const Option = ({ text, setOpen, setValue }) => {
    return (
        <motion.li
            variants={itemVariants}
            onClick={() => {
                setOpen(false);
                setValue(text);
            }}
            className="flex items-center px-3 w-full p-2 text-[14px] font-medium whitespace-nowrap rounded-md group hover:bg-main  transition-colors cursor-pointer"
        >
            <motion.span variants={actionIconVariants}></motion.span>
            <span className="transition-color group-hover:text-[white]">
                {text}
            </span>
        </motion.li>
    );
};

export default DrowbSubjects;

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

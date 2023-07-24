import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[35px] md:text-[85px] 2xl:text-[110px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald capitalize mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>From Pixels to Passion <br />Introducing <span className="text-teal-600  hover:text-black cursor-pointer ">Md reyaz ansari </span></span>
                    <span className="flex items-center gap-2">
                        <span></span>
                        {/* <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        /> */}
                        <span></span>
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative border-2 border-transparent hover:border-indigo-900 transition hover:text-cyan-500 rounded-lg pl-3">
                Welcome to Md reyaz ansari's professional portfolio! Delving into the realm of web development, I am dedicated to crafting exceptional digital experiences that leave a lasting impression.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative border-2 border-transparent hover:border-indigo-900 transition hover:text-amber-600 rounded-lg pl-3">
                As a seasoned web developer, I am driven by a passion for innovation and a commitment to delivering top-notch solutions. Through meticulous attention to detail and a focus on user-centric design, I bring ideas to life in the virtual landscape.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative border-2 border-transparent hover:border-indigo-900 transition hover:text-teal-500 rounded-lg pl-3">
                Throughout this portfolio, you'll find a curated collection of projects that showcase the breadth of my expertise. From responsive websites that seamlessly adapt to various devices and screen sizes to dynamic web applications that push the boundaries of interactivity, each endeavor reflects a harmonious blend of creativity and technical prowess.With an unwavering dedication to clean code and best practices, I ensure that every project meets the highest standards of performance, security, and maintainability. <br />
                Thank you for visiting my portfolio. If you seek a dedicated web developer who combines technical expertise with an eye for detail, I look forward to discussing how we can collaborate to bring your ideas to fruition.
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;

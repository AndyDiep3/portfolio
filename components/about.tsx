"use client";

import React, { useEffect } from "react";
import Sectionheading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem]
    text-center leading-8 sm:mb-40
    scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Sectionheading>About me</Sectionheading>
      <p className="mb-3">
        After graduating with a diploma in{" "}
        <span className="font-medium">Personal Training</span>, I decided to
        pursue my passion for programming. I enrolled in a Information
        Techonology Diploma Program in University and learned and majored in{" "}
        <span className="font-medium">software development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React and Next.js</span>. I am also
        familiar with TypeScript, Python and Java. I am always looking to learn
        new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning <span className="font-medium">Spanish</span>. I'm also learning
        how to cook different type of foods I enjoy.
      </p>
    </motion.section>
  );
}

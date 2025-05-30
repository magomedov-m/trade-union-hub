"use client";
import { motion } from "framer-motion";
import { pageVariables, pageTransitions } from "../_pageAnimations";

export default function Events() {
  return (
    <motion.div
      exit={pageVariables.out}
      animate={pageVariables.in}
      initial={pageVariables.out}
      transition={pageTransitions}
    >
      Это страница о событиях
    </motion.div>
  );
}

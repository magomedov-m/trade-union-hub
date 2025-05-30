"use client";
import { motion } from "framer-motion";
import { pageVariables, pageTransitions } from "../_pageAnimations";

export default function employeeRegistry() {
  return (
    <motion.div
      exit={pageVariables.out}
      animate={pageVariables.in}
      initial={pageVariables.out}
      transition={pageTransitions}
    >
      это реестр сотрудников
    </motion.div>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 shadow h-14 bg-white">
        <ul className="flex justify-between">
          <li className="w-full">
            <Link href={'/app'} className="w-full h-14 flex justify-center items-center text-center">
              Inicio
            </Link>
          </li>
          <li className="w-full">
            <Link href={'/sobre-mi'} className="w-full h-14 flex justify-center items-center text-center">
              Sobre mí
            </Link>
          </li>
          <li className="w-full">
            <Link href={'/cuenta'} className="w-full h-14 flex justify-center items-center text-center">
              Cuenta
            </Link>
          </li>
        </ul>
      </nav>

      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Layout;

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const splash = setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);

    return () => {
      clearTimeout(splash);
    };
  }, []);

  return (
    <AnimatePresence>
      {showSplashScreen && (
        <motion.div
          className="w-full h-screen flex flex-col items-center justify-center bg-white"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className=" w-72 h-72">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_DTosIIqiu8.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <h1 className="text-red-500 text-2xl font-bold">Mis Comidas</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;

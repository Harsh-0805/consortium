import { motion, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AppearOnScroll = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const onScreen =
      element?.getBoundingClientRect().top! <= window.innerHeight * 0.75;

    if (onScreen) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const element = ref.current;
    const onScreen =
      element?.getBoundingClientRect().top! <= window.innerHeight * 0.75;

    if (onScreen) {
      setIsVisible(true);
    }
  }, [scrollY]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AppearOnScroll;

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  threshold?: number;
  delay?: number;
  duration?: number;
  children: React.ReactNode;
};

const FadeInWhenVisible = ({
  threshold = 0.2,
  delay = 0,
  duration = 0.5,
  children,
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
      }
    );
    observer.observe(node);
    return () => {
      observer.unobserve(node);
    };
  }, [threshold]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={
        isVisible ? { opacity: 1, transition: { delay, duration } } : undefined
      }
      exit={{ opacity: 0, transition: { duration } }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;

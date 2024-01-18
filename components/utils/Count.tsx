import React from 'react';
import CountUp from 'react-countup';

interface IProps {
  number: number;
  duration: number;
}

const Count = (props: IProps) => {
  const { number, duration } = props;
  const ref = React.useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const { top, bottom } = element.getBoundingClientRect();
      const isVisible = top < window.innerHeight && bottom >= 0;
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <span ref={ref}>
      {isVisible && <>
        <CountUp start={0} end={number} duration={duration} />
        {" + "}
      </>}
    </span>
  );
};

export default Count;
import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ITypeWriterTextAnimationProps {
  text: string;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
}

const TypeWriterTextAnimation: FC<ITypeWriterTextAnimationProps> = ({
  text,
  tag = "span",
  className,
  ...rest
}) => {
  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div
        key={`text-animation`}
        className={`${className}`}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        {...rest}
      >
        {text.split("").map((item, idx) => (
          <motion.span key={idx} variants={letterVariants}>
            {item}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default TypeWriterTextAnimation;

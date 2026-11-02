import { m, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

// Fades a block in once when it scrolls into view.
// Only opacity and transform are animated, so it stays on the compositor.
export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </m.div>
  );
}

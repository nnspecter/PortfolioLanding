import type { ReactNode } from "react";
import { LazyMotion, MotionConfig } from "framer-motion";

const loadMotionFeatures = () => import("./motion-features").then((mod) => mod.default);

// Loads the animation engine as a separate chunk and respects reduced-motion settings.
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

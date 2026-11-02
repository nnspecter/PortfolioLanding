import { HomePage } from "@/pages/home";
import { MotionProvider } from "./providers/MotionProvider";

export function App() {
  return (
    <MotionProvider>
      <HomePage />
    </MotionProvider>
  );
}

import { useEffect, useRef } from "react";
import "./App.css";
import Chest from "./components/Chest";
import Header from "./components/Header";

const App: React.FC<any> = () => {
  const letterFade = [{ opacity: "0" }, { opacity: "1" }];

  const fadeRef = useRef(null);

  useEffect(() => {
    const el = fadeRef.current;
    if (el) {
      (el as any).animate(letterFade, { duration: 2000, delay: 0 });
    }
  }, []);

  return (
    <div className="container">
      <Header />
      <p className="play-text" ref={fadeRef}>
        play the pattern
      </p>
      <Chest />
    </div>
  );
};

export default App;

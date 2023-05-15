import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { motion } from "framer-motion";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Tech,
} from "./components";
import { styles } from "./styles";
import { staggerContainer } from "./utils/motion";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, animate: 0.25 }}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
          <StarsCanvas />
        </motion.section>
      </div>
    </BrowserRouter>
  );
}

export default App;

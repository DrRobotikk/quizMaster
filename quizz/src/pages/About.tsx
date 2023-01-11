import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Body } from "../components/Body";

export const About = () => {
  const text ="This is a great page for quiz, made by me!"
  const header = "About";
  return (
    <div>
      <Navbar />
      <Body header={header} text={text} />
      <Footer />
    </div>
  );
};

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Body } from "../components/Body";

export const Home = () => {
  const header = "Welcome to Quizz";
  const text = "Magic is in the air, and you can feel it!";
  return (
    <div>
      <Navbar />
      <Body header={header} text={text} />
      <Footer />
    </div>
  );
};

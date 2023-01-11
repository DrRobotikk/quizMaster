import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Body } from "../components/Body";

export const Quizzes = () => {
  const header = "Quizzes";
  const text = "Here you can find all the quizzes!";
  return (
    <div>
      <Navbar />
      <Body header={header} text={text} />
      <Footer />
    </div>
  );
};

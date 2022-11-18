import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Body } from "../components/Body";

export const Quizzes = () => {
  const header = "Quizzes";
  return (
    <div>
      <Navbar />
      <Body header={header} text="This is a quiz page" />
      <Footer />
    </div>
  );
};

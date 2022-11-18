import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Body } from "../components/Body";

export const Home = () => {
  const header = "Welcome to Quizz";
  return (
    <div>
      <Navbar />
      <Body header={header} text="This is a quiz app" />
      <Footer />
    </div>
  );
};

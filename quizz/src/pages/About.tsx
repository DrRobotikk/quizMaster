import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Body } from "../components/Body";

export const About = () => {
  const header = "About";
  return (
    <div>
      <Navbar />
      <Body header={header} text="This is an about page" />
      <Footer />
    </div>
  );
};

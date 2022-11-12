import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Body
        name="Homepage"
        article="Masse masse tekst som, ingen vet hvordan en skal bruke men haddde vert kult om dette fungerte"
      />
      <Footer />
    </div>
  );
}

export default Home;

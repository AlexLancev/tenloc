import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SubscribeMail } from "./components/SubscribeMail";
import { PopularDestinations } from "./components/PopularDestinations";
import { Hero } from "./components/Hero";
import { PopularTravel } from "./components/PopularTravel";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PopularDestinations />
      <PopularTravel />
      <SubscribeMail />
      <Footer />
    </div>
  );
}

export default App;

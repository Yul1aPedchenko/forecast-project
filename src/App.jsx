import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { RecentSearches } from "./components/RecentSearches/RecentSearches";
import { News } from "./components/News/News";
import { Slider } from "./components/Slider/Slider";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <RecentSearches />
      <News />
      <Slider />
      <Footer />
    </>
  );
}

export default App;

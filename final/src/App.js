import "./App.css";
import {
  AreaOfPractices,
  Banner,
  ChooseUs,
  Clients,
  Header,
  Intro,
  Team,
  FAQ,
  Newsletter,
} from "./components/exports";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Intro />
      <ChooseUs />
      <AreaOfPractices />
      <Clients />
      <Team />
      <FAQ />
      <Newsletter />
    </div>
  );
}

export default App;

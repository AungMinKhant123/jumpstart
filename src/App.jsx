import "./App.css";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Chatbot />
      <Footer />
    </>
  );
};

export default App;
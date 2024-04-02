import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";
import PageThree from "./Components/PageThree";
import logoimg from "./Components/media/logo.png";
import Footer from "./Components/Footer";
import Memberpage from "./Components/Memberpage";

function App() {
  return (
    <div>
      <nav>
        <div>
          <img id="logo" src={logoimg} width="180" height="155" />
        </div>
      </nav>
      <PageOne />
      <PageTwo />
      <PageThree />
      <Memberpage />
      <Footer />
    </div>
  );
}

export default App;

import * as Components from "../../components"
import "./index.css"

export const Main = () => {
    return (
      <div className="App">
        <Components.Navbar />
        <Components.Header />
        <Components.Services />
        <Components.AboutUs />
        <Components.Counter />
        <Components.Footer />
      </div>
    );
  };

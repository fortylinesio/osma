import * as Components from "../../components"
import "./index.css"
import data from '../data/data.json'

export const Main = () => {
    return (
      <div className="Main">
        <Components.Navbar />
        <Components.Header />
        <Components.Services />
        <Components.AboutUs />
        {/* {data.counts.map(count => <Components.Counter key={count.id} data={count}/>)} */}
        <Components.Footer />
      </div>
    );
  };

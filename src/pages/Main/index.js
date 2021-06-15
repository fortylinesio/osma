import * as Components from "../../components"
import "./index.css"
// import data from './data.json'

// import ym from 'react-yandex-metrika';
// ym('hit', '/');

export const Main = () => {
  return (
    <div className="main">
      <Components.Services />
      <Components.AboutUs />
      {/* {data.counts.map(count => <Components.Counter key={count.id} data={count}/>)} */}
    </div>
  );
};

import ReactDOM from "react-dom/client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./index.css";
import Movie from './Movie.jsx';
import { movieDataRomance, movieDataAction, movieDataHorror, movieDataKids, responsive } from "./data.js";

export default function App() {

  const movieRomance = movieDataRomance.map((item) => (
    <Movie
      name={item.name}
      url={item.img}
      clasification={item.clasification}
      description={item.description}
    />
  ));

  const movieAction = movieDataAction.map((item) => (
    <Movie
      name={item.name}
      url={item.img}
      clasification={item.clasification}
      description={item.description}
    />
  ));

  const movieHorror = movieDataHorror.map((item) => (
    <Movie
      name={item.name}
      url={item.img}
      clasification={item.clasification}
      description={item.description}
    />
  ));

  const movieKids = movieDataKids.map((item) => (
    <Movie
      name={item.name}
      url={item.img}
      clasification={item.clasification}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <h1>Plataforma de videos</h1>
      <h2>ROMANCE</h2>
      <Carousel showDots={true} responsive={responsive}>
        {movieRomance}
      </Carousel>
      <h2>ACCIÓN</h2>
      <Carousel showDots={true} responsive={responsive}>
        {movieAction}
      </Carousel>
      <h2>TERROR</h2>
      <Carousel showDots={true} responsive={responsive}>
        {movieHorror}
      </Carousel>
      <h2>INFANTIL</h2>
      <Carousel showDots={true} responsive={responsive}>
        {movieKids}
      </Carousel>
      <br></br>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
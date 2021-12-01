import React from "react";
import "../Game.css";
import Card from "./Card";


import monstera from "./images/Plants/monstera.jpg"
import dracaena from "./images/Plants/dracaena.jpg"
import pancake from "./images/Plants/pilea_peromiodes.jpg"
import aloe from "./images/Plants/aloe_vera.jpg"
import snake from "./images/Plants/snake.jpg"
import fig from "./images/Plants/fig.jpg"
import ficus from "./images/Plants/ficus.jpg"
import money from "./images/Plants/money.jpg"
import philo from "./images/Plants/philodendron.jpg"
import bonsai from "./images/Plants/bonsai.jpg"
import rubber from "./images/Plants/rubber.jpg"
import zz from "./images/Plants/zz.jpg"

class Game extends React.Component{
  constructor(props) {
    super();
    this.state = {
      plants: [
        {
          name:"Dracaena",
          image: dracaena,
          id:1,
        },
        {
          name:"Monstera Deliciosa",
          image: monstera,
          id:2,
        },
        {
          name:"Pilea Peromiodes",
          image: pancake,
          id:3,
        },
        {
          name:"Aloe Vera",
          image: aloe,
          id:4,
        },
        {
          name:"Snake Plant",
          image: snake,
          id:5,
        },
        {
          name:"Fiddle Leaf Fig",
          image: fig,
          id:6,
        },
        {
          name:"Ficus",
          image: ficus,
          id:7,
        },
        {
          name:"Money Tree",
          image: money,
          id:8,
        },
        {
          name:"Philodendron",
          image: philo,
          id:9,
        },
        {
          name:"Bonsai Tree",
          image: bonsai,
          id:10,
        },
        {
          name:"Rubber Tree",
          image: rubber,
          id:12,
        },
        {
          name:"ZZ Plant",
          image: zz,
          id:12,
        },
      ]
    };
}

  
  
  render(){
    return(
        <div>
            <header>
                <h1>House Plant Memory Game</h1>
                <div className="score-block">
                    <p>Current Score: </p>
                    <p>High Score: </p>
                </div>
            </header>
            <main>
                {this.state.plants.map(plant => {
                  return <Card name={plant.name} image={plant.image} />
                })}
            </main>
        </div>
    )};
}

export default Game;

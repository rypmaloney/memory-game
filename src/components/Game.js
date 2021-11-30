import React from "react";
import "../Game.css";
import Card from "./Card";
import dracaena from "./images/Plants/monstera.jpg"

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
          name:"Monstera",
          image:"",
          id:2,
        },
        {
          name:"Pancake",
          image:"",
          id:3,
        },
        {
          name:"Cactus",
          image:"",
          id:1,
        }
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

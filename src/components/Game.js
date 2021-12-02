import React, { useState, useEffect } from "react";
import "../Game.css";
import Card from "./Card";

import monstera from "./images/Plants/monstera.jpg";
import dracaena from "./images/Plants/dracaena.jpg";
import pancake from "./images/Plants/pilea_peromiodes.jpg";
import aloe from "./images/Plants/aloe_vera.jpg";
import snake from "./images/Plants/snake.jpg";
import fig from "./images/Plants/fig.jpg";
import ficus from "./images/Plants/ficus.jpg";
import money from "./images/Plants/money.jpg";
import philo from "./images/Plants/philodendron.jpg";
import bonsai from "./images/Plants/bonsai.jpg";
import rubber from "./images/Plants/rubber.jpg";
import zz from "./images/Plants/zz.jpg";

const Game = () => {
    const [plants, setPlants] = useState([
        {
            name: "Dracaena",
            image: dracaena,
            clicked: false,
            id: 1,
        },
        {
            name: "Monstera Deliciosa",
            image: monstera,
            clicked: false,
            id: 2,
        },
        {
            name: "Pilea Peromiodes",
            image: pancake,
            clicked: false,
            id: 3,
        },
        {
            name: "Aloe Vera",
            image: aloe,
            clicked: false,
            id: 4,
        },
        {
            name: "Snake Plant",
            image: snake,
            clicked: false,
            id: 5,
        },
        {
            name: "Fiddle Leaf Fig",
            image: fig,
            clicked: false,
            id: 6,
        },
        {
            name: "Ficus",
            image: ficus,
            clicked: false,
            id: 7,
        },
        {
            name: "Money Tree",
            image: money,
            clicked: false,
            id: 8,
        },
        {
            name: "Philodendron",
            image: philo,
            clicked: false,
            id: 9,
        },
        {
            name: "Bonsai Tree",
            image: bonsai,
            clicked: false,
            id: 10,
        },
        {
            name: "Rubber Tree",
            image: rubber,
            clicked: false,
            id: 11,
        },
        {
            name: "ZZ Plant",
            image: zz,
            clicked: false,
            id: 12,
        },
    ]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);


    
    const shufflePlants = () => {
        setPlants(shuffleArray(plants.slice()));
    };

    const switchClicked = (e) => {
        //find the plant that has been clicked in the state array
        let index = plants.findIndex((element) => element.id === parseInt(e.target.id));
        let switchPlants = plants.slice();

        //If the plants been clicked before, set the current score to zero and reset plant click attributes
        //if the plant hasn't been clicked before, set the score +1
        if (switchPlants[index].clicked === true) {
            clearClicked();
            if (score > highScore) {
                setHighScore(score);
            }
            setScore(0);
        } else {
            setScore(score + 1);
            switchPlants[index].clicked = true;
            setPlants(switchPlants);
        }
        shufflePlants();
    };

    //Resets all plants clicked key to false
    const clearClicked = () => {
        let clearPlants = plants.slice();
        for (let i = 0; i < plants.length; i++) {
            clearPlants[i].clicked = false;
        }
        setPlants(clearPlants);
    };

    useEffect(() => {
        setPlants(shuffleArray(plants));
    }, []);

    return (
        <div className="game">
            <header>
                <h1>House Plant Memory Game</h1>
                <div className="score-block">
                    <p>Current Score: {score}</p>
                    <p>High Score: {highScore} </p>
                </div>
            </header>
            <main>
                {plants.map((plant) => {
                    return (
                        <Card
                            name={plant.name}
                            image={plant.image}
                            key={plant.id}
                            id={plant.id}
                            shufflePlants={shufflePlants}
                            switchClicked={switchClicked}
                        />
                    );
                })}
            </main>
        </div>
    );
};

//ES6 optimized Durstenfeld Shuffle 
//from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default Game;

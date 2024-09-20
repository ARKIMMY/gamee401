import { useState } from "react";
import './App.css';  

export default function App() {
  const [level, setLevel] = useState(0);
  const [imageSize, setImageSize] = useState(100);
  const [pigImage, setPigImage] = useState("หมูเด้ง2.jpg"); 

  const increaseLevel = (value) => {
    const newLevel = level + value;
    setLevel(newLevel);

    if (newLevel >= 100) {
      setPigImage("น่ารัก.jpg"); 
      setImageSize(200); 
    } else {
      setImageSize(imageSize + value * 2); 
    }
  }
  const resetGame = () => {
    setLevel(0); 
    setImageSize(100); 
    setPigImage("หมูเด้ง2.jpg"); 
  }

  return (
    <div className="game-container">
      <h1>Level {level}</h1>
      <img
        src={pigImage}  
        alt="หมูเด้ง"
        style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
      />

      <h2>ป้อนอาหารให้หมูเด้งกันน!!!</h2>

      <div className="food-container">
        <img
          src="แตงโม.jpg"
          alt="แตงโม"
          onClick={() => increaseLevel(5)}
          className="food-item"
        />
        <img
          src="ฟักทอง.jpg"
          alt="ฟักทอง"
          onClick={() => increaseLevel(10)}
          className="food-item"
        />
        <img
          src="ก๋วยเตี๋ยว.jpg"
          alt="ก๋วยเตี๋ยว"
          onClick={() => increaseLevel(20)}
          className="food-item"
        />
      </div>
      <button onClick={resetGame} className="reset-button">
        Reset
      </button>
    </div>
  );
}



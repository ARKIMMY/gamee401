import { useState } from "react";
import './App.css';  

export default function App() {
  const [level, setLevel] = useState(0);
  const [imageSize, setImageSize] = useState(100);
  const [pigImage, setPigImage] = useState("https://medias.thansettakij.com/uploads/images/contents/w1024/2024/09/3MqOLiL6Zeunmtw2RQFZ.webp?x-image-process=style/lg-webp"); 

  const increaseLevel = (value) => {
    const newLevel = level + value;
    setLevel(newLevel);

    if (newLevel >= 100) {
      setPigImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZevoJt__77M9upQqr94uw_Px2dEPZrAmUFWkkKHY7bFz6EkEfxkwzHCyxCpGHQCRKCE&usqp=CAU"); 
      setImageSize(200); 
    } else {
      setImageSize(imageSize + value * 2); 
    }
  }
  const resetGame = () => {
    setLevel(0); 
    setImageSize(100); 
    setPigImage("https://medias.thansettakij.com/uploads/images/contents/w1024/2024/09/3MqOLiL6Zeunmtw2RQFZ.webp?x-image-process=style/lg-webp"); 
  }

  return (
    <div className="game-container">
      <h1>เกมให้อาหารหมูเด้ง :Level {level}</h1>
      <img
        src={pigImage}  
        alt="หมูเด้ง"
        style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
      />

      <h2>ป้อนอาหารให้หมูเด้งกันน!!!</h2>

      <div className="food-container">
        <img
          src="https://blog.topclinic.in.th/wp-content/uploads/2023/12/3-%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%94%E0%B8%B5-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B9%80%E0%B8%A1%E0%B8%A5%E0%B9%87%E0%B8%94%E0%B9%81%E0%B8%95%E0%B8%87%E0%B9%82%E0%B8%A1-.png"
          alt="แตงโม"
          onClick={() => increaseLevel(5)}
          className="food-item"
        />
        <img
          src="https://s.isanook.com/wo/0/ud/45/225397/225397-thumbnail.jpg"
          alt="ฟักทอง"
          onClick={() => increaseLevel(10)}
          className="food-item"
        />
        <img
          src="https://f.ptcdn.info/384/081/000/rza3lw13gzdhbuRPX2D4y-o.jpg"
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



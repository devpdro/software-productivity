import { useEffect, useState } from "react";

const Input = () => {
  const [currentTime, setCurrentTime] = useState("");

  const updateCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    const formattedTime = `${formattedHours}:${formattedMinutes}`;

    setCurrentTime(formattedTime);
  };
  useEffect(() => {
    updateCurrentTime();
  }, []);

  return (
    <div>
      <h2>Adicionar lote</h2>
      <form>
        <div>
          <label htmlFor="Nome do lote">
            <input type="text" name="" id="" />
          </label>
          <label htmlFor="currentTime">Current Time:</label>
          <input type="text" id="currentTime" value={currentTime} readOnly />
        </div>
        <div>
          <label htmlFor="Nome do lote">
            <input type="text" name="" id="" />
          </label>
        </div>
        <div>
          <label htmlFor="Nome do lote">
            <input type="text" name="" id="" />
          </label>
        </div>
        <label htmlFor="">
          <input type="text" name="" id="" />
        </label>
        <button type="submit">Adicionar</button>
      </form>
      <button>Fechar Modal</button>
    </div>
  );
};

export default Input;

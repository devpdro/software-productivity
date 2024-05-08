import { useState, useEffect } from "react";
import * as S from "./time-styles";

interface TimeProps {
  showExpectedTime: boolean;
}

const Time = ({ showExpectedTime }: TimeProps) => {
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
    <S.Container>
      <label htmlFor="currentTime">Hora atual</label>
      <input type="text" id="currentTime" value={currentTime} readOnly />
      {showExpectedTime && (
        <>
          <label htmlFor="currentDepois">Hora prevista</label>
          <input type="text" id="currentDepois" />
        </>
      )}
    </S.Container>
  );
};

export default Time;

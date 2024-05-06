import { useState } from "react";
import Modal from "react-modal";

import * as S from "./progress-styles";

Modal.setAppElement("#root");

interface Box {
  id: number;
}

const Progress: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boxes, setBoxes] = useState<Box[]>([]);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsModalOpen(false); // Fecha o modal após enviar o formulário
    setBoxes([...boxes, { id: boxes.length + 1 }]); // Adiciona uma nova caixa à lista
  };

  return (
    <S.Container>
      <h1>Em andamento</h1>
      <S.BoxContainer>
        <S.Icon onClick={handleModalToggle} />
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleModalToggle}
            contentLabel="Modal Grande"
            style={{
              content: {
                width: "400px",
                margin: "auto",
              },
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <h2>Modal Grande</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="">
                  <input type="text" name="" id="" />
                </label>
             
              </div>
              <label htmlFor="">
                <input type="text" name="" id="" />
              </label>
              <button type="submit">Adicionar</button>
            </form>
            <button onClick={handleModalToggle}>Fechar Modal</button>
          </Modal>
        )}
        {boxes.map((box) => (
          <div
            key={box.id}
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "lightgray",
              margin: "20px", // Adicionado margem entre as caixas
            }}
          >
            Caixa {box.id}
          </div>
        ))}
      </S.BoxContainer>
    </S.Container>
  );
};

export default Progress;

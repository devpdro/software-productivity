import { useState } from "react";
import Modal from "react-modal";

import { InputText, InputTime } from "../Input";
import { Select } from "..";

import * as S from "./modal-styles";

const CustomModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <S.Container>
      <svg
        onClick={handleModalToggle}
        style={{ marginTop: "0.25rem" }}
        xmlns="http://www.w3.org/2000/svg"
        width={44}
        height={44}
        fill="#3C91E6"
        viewBox="0 0 256 256"
      >
        <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
      </svg>
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
          <S.Title>Adicionar lote</S.Title>
          <S.BoxForm>
            <InputText name="Nome do lote" id="name"/>
            <InputTime showExpectedTime/>
          </S.BoxForm>
          <Select />
        </Modal>
      )}
    </S.Container>
  );
};

export default CustomModal;

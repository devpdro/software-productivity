import { useState } from "react";
import Modal from "react-modal";

import { Form } from "..";

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
              width: "500px",
              margin: "auto",
            },
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <Form />
        </Modal>
      )}
    </S.Container>
  );
};

export default CustomModal;

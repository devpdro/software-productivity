import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  label {
    font-size: 1.05rem;
    margin-bottom: 0.25rem;
  }

  input {
    transition: border-color 0.3s ease;
    border: 1px solid #ccc;
    outline: none;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;

    &:focus {
      border-color: #1c1c1c;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.header`
  padding: 0rem 1.75rem;
  h1 {
    font-weight: 500;
    font-size: 2.25rem;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.75rem;
`;

export const IconBox = styled.div`
  background-color: #dcebfe;
  color: #3c91e6;
  cursor: pointer;
  padding: 0.625rem 0.875rem;
  border-radius: 10px;
`;

export const TextBox = styled.div`
  margin-left: 0.75rem;
  h2 {
    font-weight: 500;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.15rem;
    font-weight: 400;
  }
`;

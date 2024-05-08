import styled from "styled-components";

import { FaPlus } from "react-icons/fa";

export const Container = styled.section`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 2rem 1.750rem;
  margin-top: 10rem;
  h1 {
    font-weight: 500;
    font-size: 2.250rem;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

export const Icon = styled(FaPlus)`
  width: 100px;
  height: 100px;
  margin: 20px;
`;

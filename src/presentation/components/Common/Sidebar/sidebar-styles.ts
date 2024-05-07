import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  gap: 6px;
`;

export const Sidebar = styled.div<{ open: boolean }>`
  width: ${({ open }) => (open ? "230px" : "72px")};
  background-color: #f9f9f9;
  color: #1c1c1c;
  height: 100vh;
  padding: 0 1rem;
  transition: width 0.5s ease;
`;

export const MainMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem 0.25rem;
`;

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 1rem;
  gap: 0.75rem;
`;

export const SideLink = styled.div`
  text-decoration: none;
  color: inherit;
  &.active {
    background-color: #dcebfe;
    color: #3c91e6;
  }
`;

export const MenuItem = styled.li<{ margin?: boolean }>`
  ${({ margin }) => margin && "margin-top: 1.25rem;"}
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s ease;
  border-radius: 10px;
  font-size: 0.75rem;
  padding: 0.375rem 1rem 0.375rem 0.45rem;
  gap: 0.875rem;
  &:hover {
    background-color: #dcebfe;
    color: #3c91e6;
  }
`;

export const MenuLabel = styled.h2<{ open: boolean; index: number }>`
  transform: ${({ open }) => !open && "translateX(0px)"};
  transition-delay: ${({ index }) => `${index + 3}00ms`};
  opacity: ${({ open }) => (open ? "1" : "0")};
  overflow: hidden;
  white-space: pre;
  transition: opacity 0.5s;
`;

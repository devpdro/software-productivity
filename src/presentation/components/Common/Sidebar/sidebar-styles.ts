import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  gap: 6px;
`;

export const Sidebar = styled.div<{ open: boolean }>`
  width: ${({ open }) => (open ? "240px" : "72px")};
  background-color: #0e0e0e;
  color: #fff;
  transition: width 0.5s;
  min-height: 100vh;
  padding: 0 1rem;
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

export const MenuItem = styled.li<{ margin?: boolean }>`
  ${({ margin }) => margin && "margin-top: 1.25rem;"}
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s ease;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem;
  gap: 0.875rem;
  &:hover {
    background-color: #4b5563;
  }
`;

export const MenuLabel = styled.h2<{ open: boolean; index: number }>`
  transform: ${({ open }) => !open && "translateX(28px)"};
  transition-delay: ${({ index }) => `${index + 3}00ms`};
  opacity: ${({ open }) => (open ? "1" : "0")};
  overflow: hidden;
  white-space: pre;
  transition: opacity 0.5s;
`;

export const Tooltip = styled.h2`
  position: absolute;
  width: fit-content;
  overflow: hidden;
  white-space: pre;
  background-color: #fff;
  color: #1f2937;
  transition: all 0.3s;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  opacity: 0;
  left: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  ${MenuItem}:hover & {
    transition-delay: 0.3s;
    left: 2.5rem;
    opacity: 1;
  }
`;

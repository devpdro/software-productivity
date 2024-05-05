import React, { useState } from "react";

import { menus } from "../../../../core";

import { HiMenuAlt3 } from "react-icons/hi";

import * as S from './sidebar-styles'

const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <S.Container>
      <S.Sidebar open={open}>
        <S.MainMenu>
          <HiMenuAlt3
            size={26}
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(!open)}
          />
        </S.MainMenu>
        <S.ContainerItem>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {menus?.map((menu: any, i: any) => (
            <S.MenuItem
              key={i}
              margin={menu?.margin}
              className="group"
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <S.MenuLabel
                open={open}
                index={i}
                style={{ opacity: open ? 1 : 0, transitionDelay: `${i + 3}00ms`, overflow: "hidden", whiteSpace: "pre", transition: "opacity 0.5s", transform: open ? "none" : "translateX(28px)" }}
              >
                {menu?.name}
              </S.MenuLabel>
              <S.Tooltip>{menu?.name}</S.Tooltip>
            </S.MenuItem>
          ))}
        </S.ContainerItem>
      </S.Sidebar>
      <div style={{ margin: "0.75rem", fontSize: "1.25rem", color: "#1f2937" }}>
        Página inicial
      </div>
    </S.Container>
  );
};

export default Home;

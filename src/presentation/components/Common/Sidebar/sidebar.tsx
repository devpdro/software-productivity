import React, { useState } from "react";
import { Link } from "react-router-dom";

import { menus } from "../../../../core";

import { HiMenuAlt3 } from "react-icons/hi";

import * as S from "./sidebar-styles";

const Home = () => {
  const [open, setOpen] = useState(false);

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
         <Link to={menu?.link} style={{ textDecoration: "none", color: "inherit" }} key={i}>
              <S.MenuItem margin={menu?.margin} className="group">
                <div style={{ marginTop: "0.250rem" }}>{React.createElement(menu?.icon, { size: "22" })}</div>
                <S.MenuLabel
                  open={open}
                  index={i}
                  style={{
                    opacity: open ? 1 : 0,
                    transitionDelay: `${i + 3}00ms`,
                    overflow: "hidden",
                    whiteSpace: "pre",
                    transition: "opacity 0.5s",
                    transform: open ? "none" : "translateX(28px)",
                  }}
                  >
                  {menu?.name}
                </S.MenuLabel>
              </S.MenuItem>
            </Link>
          ))}
        </S.ContainerItem>
      </S.Sidebar>
    </S.Container>
  );
};

export default Home;

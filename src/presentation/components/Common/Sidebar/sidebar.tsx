import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { MenuItem } from "../../../interfaces";
import { Menu } from "../../../../data";

import { HiMenuAlt3 } from "react-icons/hi";

import * as S from "./sidebar-styles";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMenuItemClick = (index: number, link: string) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      navigate(link);
    }
  };

  useEffect(() => {
    const index = Menu.findIndex((menu) => menu.link === pathname);
    setActiveIndex(index !== -1 ? index : null);
  }, [pathname]);

  return (
    <S.Container>
      <S.Sidebar open={open}>
        <S.MainMenu>
          <HiMenuAlt3
            size={28}
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(!open)}
          />
        </S.MainMenu>
        <S.ContainerItem>
          {Menu?.map((menu: MenuItem, i: number) => (
            <S.SideLink
              key={i}
              onClick={() => handleMenuItemClick(i, menu?.link)}
            >
              <S.MenuItem
                className={i === activeIndex ? "active" : ""}
                margin={menu?.margin}
              >
                <div style={{ marginTop: "0.250rem" }}>
                  {React.createElement(menu?.icon, { size: "24" })}
                </div>
                <S.MenuLabel open={open} index={i}>
                  {menu?.name}
                </S.MenuLabel>
              </S.MenuItem>
            </S.SideLink>
          ))}
        </S.ContainerItem>
      </S.Sidebar>
    </S.Container>
  );
};

export default Sidebar;

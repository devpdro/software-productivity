import { FaChartBar } from "react-icons/fa";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";

const Menu = [
  { name: "Usuarios", link: "/", icon: AiOutlineUser },
  {
    name: "Gerenciador",
    link: "/painel-de-lotes",
    icon: FaChartBar,
    margin: true,
  },
  { name: "Configurações", link: "/configuracoes", icon: RiSettings4Line },
];

export default Menu;

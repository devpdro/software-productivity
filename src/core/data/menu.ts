import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder } from "react-icons/fi";
 
const menus = [
  { name: "Usuarios", link: "/", icon: MdOutlineDashboard },
  { name: "user", link: "/", icon: AiOutlineUser },
  { name: "messages", link: "/", icon: FiMessageSquare },
  { name: "Gerenciador de lotes", link: "/", icon: TbReportAnalytics, margin: true },
  { name: "Automatização", link: "/", icon: FiFolder },
  { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
  { name: "Configurações", link: "/", icon: RiSettings4Line },
];

export default menus
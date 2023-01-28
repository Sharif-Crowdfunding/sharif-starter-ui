
import { Icon, Text } from "@chakra-ui/react";
import {
  MdBarChart, MdHome, MdLibraryBooks, MdOutlineShoppingCart, MdPerson
} from "react-icons/md";

const routes = [
  {
    name: "داشبورد",
    layout: "/d",
    path: "/main",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: <Text fontSize={200} padding='300px'>Main</Text>,
  },
  {
    name: "بازار حراجی",
    layout: "/d",
    path: "/token-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: <div>Main</div>,
    secondary: true,
  },
  {
    name: "گزارش",
    layout: "/d",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: <div>Main</div>,
  },
  {
    name: "پروژه های من",
    layout: "/d",
    path: "/my-projects",
    icon: <Icon as={MdLibraryBooks} width='20px' height='20px' color='inherit' />,
    component: <div>RTL</div>,
  },
  {
    name: "پروفایل کاربری",
    layout: "/d",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: <div>Main</div>,
  },

];

export default routes;

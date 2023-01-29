// Chakra imports
import { Box, Portal, useDisclosure } from "@chakra-ui/react";
// Layout components
import { Navigate, useLocation } from "react-router-dom";
import FixedPlugin from "../../components/fixedPlugin/FixedPlugin";
import NavbarRTL from "../../components/navbar/NavbarRTL";
import Sidebar from "../../components/sidebar/Sidebar";
import { useAuth } from "../../providers/auth";
import routes from "./NavConfig";


export default function DashboardLayout({ children }) {
  const { user } = useAuth();

  let location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  // states and functions
  // const [toggleSidebar, setToggleSidebar] = useState(false);
  const getActiveRoute = (routes) => {
    let title = "داشبورد";
    for (let i = 0; i < routes.length; i++) {
      if (activeRoute(routes[i].path.toLowerCase()))
        title = routes[i].name;
    }
    return title;
  };
  document.documentElement.dir = "rtl";
  const { onOpen } = useDisclosure();
  return (
    <>
      {/* <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      > */}
      {!user.isAuthenticated && <Navigate to="/" />}
        <Sidebar routes={routes} display="none" />
        <Box
          float="left"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={{ base: "100%", xl: "calc( 100% - 290px )" }}
          maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Portal>
            <Box>
              <NavbarRTL
                onOpen={onOpen}
                brandText={getActiveRoute(routes)}
                // secondary={getActiveNavbar(routes)}
                // message={getActiveNavbarText(routes)}
                fixed={false}
              />
            </Box>
          </Portal>
          <Box
            mx="auto"
            p={{ base: "20px", md: "30px" }}
            top={{ base: "12px", md: "16px", xl: "18px" }}
            pe="20px"
            minH="100vh"
            pt="50px"
          >
             {children}
          </Box>
          <FixedPlugin />
        </Box>
      {/* </SidebarContext.Provider> */}
    </>
  );
}

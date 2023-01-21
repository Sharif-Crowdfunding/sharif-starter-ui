// Chakra imports
import { Box, Portal, useDisclosure } from "@chakra-ui/react";
import Footer from "components/footer/FooterAdmin.js";
// Layout components
import NavbarRTL from "components/navbar/NavbarRTL.js";
import { RtlProvider } from "components/rtlProvider/RtlProvider.js";
import { SidebarContext } from "contexts/SidebarContext";
import { Children, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import routes from "./NavConfig";

// Custom Chakra theme
export default function DashboardLayout(props) {
  const { children } = props;
  // states and functions
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  document.documentElement.dir = "rtl";
  const { onOpen } = useDisclosure();
  return (
    <RtlProvider>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}>
        <Sidebar routes={routes} display='none' />
        <Box
          float='left'
          minHeight='100vh'
          height='100%'
          overflow='auto'
          position='relative'
          maxHeight='100%'
          w={{ base: "100%", xl: "calc( 100% - 290px )" }}
          maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
          transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
          transitionDuration='.2s, .2s, .35s'
          transitionProperty='top, bottom, width'
          transitionTimingFunction='linear, linear, ease'>
          <Portal>
            <Box>
              <NavbarRTL
                onOpen={onOpen}
                brandText={"داشبورد"}
                // secondary={getActiveNavbar(routes)}
                // message={getActiveNavbarText(routes)}
                fixed={fixed}
              />
            </Box>
          </Portal>

          {children}
          <Box>
            <Footer />
          </Box>
        </Box>
      </SidebarContext.Provider>
    </RtlProvider>
  );
}

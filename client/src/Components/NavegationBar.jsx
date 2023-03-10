import {
  AppBar,
  styled,
  IconButton,
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Switch,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import {
  AccountBalanceWalletSharp,
  AppRegistration,
  DevicesOther,
  Groups2,
  Home,
  Login,
  /*Mail, Notifications,*/ QuestionMark,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import { ThemeProvider } from "@emotion/react";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CommentIcon from "@mui/icons-material/Comment";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Calendar } from '@fullcalendar/core';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Icons = styled("div")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const NavegationBar = ({ mode, setMode }) => {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setMode(mode === "light" ? "dark" : "light");
  };

  const theme = useTheme();

  const [checked, setChecked] = useState(true);

  let calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin ],
    droppable: true
  });



  new Draggable(draggableEl)


  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <StyledToolbar>
          <Box
            component="nav"
            sx={{
              width: { sm: 240 },
              flexShrink: { sm: 0 },
            }}
          >
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <div>
                <List>
                  <ListItem disablePadding
                    sx={{ display: { md: 'none', sm: 'block' } }}>
                    <Brightness7Icon />
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                    />
                    <Brightness4Icon />

                    <Divider />

                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="TablaDeHorarios">
                      <ListItemIcon>
                        <Login />
                      </ListItemIcon>
                      <ListItemText primary="Tabla de horarios" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton component="a" href="AsignarTarea">
                      <ListItemIcon>
                        <AppRegistration />
                      </ListItemIcon>
                      <ListItemText primary="Asignar tarea" />
                    </ListItemButton>
                  </ListItem>

                  <Divider />

                  {/* <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      onClick={() => setCurrentPage(page1)}
                    >
                      <ListItemIcon>
                        <Home />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      onClick={() => setCurrentPage(page2)}
                    >
                      <ListItemIcon>
                        <QuestionMark />
                      </ListItemIcon>
                      <ListItemText primary="Como funciona" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      onClick={() => setCurrentPage(page3)}
                    >
                      <ListItemIcon>
                        <DevicesOther />
                      </ListItemIcon>
                      <ListItemText primary="Dispositivos soportados" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      onClick={() => setCurrentPage(page4)}
                    >
                      <ListItemIcon>
                        <AccountBalanceWalletSharp />
                      </ListItemIcon>
                      <ListItemText primary="Planes de pago" />
                    </ListItemButton>
                  </ListItem>
                  {currentComments.data && (
                    <ListItem disablePadding>
                      <ListItemButton
                        component="a"
                        onClick={() => setCurrentPage(page6)}
                      >
                        <ListItemIcon>
                          <CommentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Comentarios" />
                      </ListItemButton>
                    </ListItem>
                  )}

                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      onClick={() => setCurrentPage(page5)}
                    >
                      <ListItemIcon>
                        <Groups2 />
                      </ListItemIcon>
                      <ListItemText primary="Conoce al equipo" />
                    </ListItemButton>
                  </ListItem> */}
                </List>
              </div>
            </Drawer>

          </Box>
          <Typography calendar={calendar}>
            Hola
          </Typography>

          <Typography
            variant='h4'
            fontWeight='bold'
            color='#fafafa'
          >
            Horarios
          </Typography>

          {/* <Icons
            sx={{ display: { sm: "none", md: "block" } }}
          >
            <Button
              variant="text"
              href="/login"
            >
              Iniciar sesion
            </Button>

            <Button
              variant="outlined"
              href="/registro"
            >
              Registrarse
            </Button>

            <Box>
              <Brightness7Icon />
              <Switch
                checked={checked}
                onChange={handleChange}
              />
              <Brightness4Icon />
            </Box>
          </Icons> */}
        </StyledToolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavegationBar;

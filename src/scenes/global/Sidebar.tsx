import React, { ReactElement, useState } from "react";

import {
  Stack,
  ButtonGroup,
  Button,
  Typography,
  Avatar,
  Box,
  IconButton,
  useTheme,
  SvgIconTypeMap,
} from "@mui/material";

import profile from "../../assets/profile.jpg";
import {
  HomeOutlined,
  PeopleOutlined,
  PersonOutlined,
  HelpOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  PieChartOutlined,
  TimelineOutlined,
  BarChartOutlined,
  MapOutlined,
  MenuOutlined,
  ReceiptOutlined,
} from "@mui/icons-material";

import "react-pro-sidebar/dist/css/styles.css";

import { tokens } from "../../theme";

import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Link } from "react-router-dom";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type ItemType = {
  title: string;
  to: string;
  icon: ReactElement;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const Item = ({ title, to, icon, selected, setSelected }: ItemType) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    //** *************************** ProSidebar********************* */

    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },

        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item : hover": {
          color: "#868dfb !important",
        },

        "& .pro-inner-item : active": {
          color: "#6870fa !important",
        },

        height: "100vh",
      }}
    >
      <ProSidebar collapsed={isCollapsed} style={{ background: "green" }}>
        <Menu iconShape="circle">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px, 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Admins
                </Typography>

                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px" mt="20px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src={profile}
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Es Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlined />}
              selected={selected}
              setSelected={setSelected}
            ></Item>

            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            ></Item>

            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlined />}
              selected={selected}
              setSelected={setSelected}
            ></Item>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            ></Item>

            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            ></Item>

            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlined />}
              selected={selected}
              setSelected={setSelected}
            ></Item>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            ></Item>

            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            ></Item>

            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            ></Item>

            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            ></Item>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>

    //** *************************** My Sidebar ********************* */

    // <Stack component="nav" sx={{ flex: 0.7 }} spacing={2} bgcolor="orange">
    //   <Stack direction="row" justifyContent="space-between" p={2}>
    //     <Typography variant="h3"> ADMINS</Typography>
    //     <MenuIcon fontSize="medium" />
    //   </Stack>

    //   <Stack p={2} spacing={2}>
    //     <Stack alignItems="center">
    //       <Avatar
    //         src={profile}
    //         alt="profile-picture"
    //         sx={{ width: 100, height: 100, mb: 1 }}
    //       />
    //       <Typography variant="h2"> Ed Roh</Typography>
    //       <Typography variant="h5"> VP Fancy Admin</Typography>
    //     </Stack>

    //     <ButtonGroup
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "flex-start",
    //         bgcolor: "pink",
    //         gap: 1,
    //       }}
    //     >
    //       <Button
    //         sx={{ width: "100%" }}
    //         variant="text"
    //         startIcon={<Home sx={{ marginRight: 1.3 }} />}
    //       >
    //         Dashboard
    //       </Button>
    //       <Typography ml={0.9}> Data </Typography>
    //       <Button
    //         variant="text"
    //         startIcon={<People sx={{ marginRight: 1.3 }} />}
    //       >
    //         Manage Team
    //       </Button>
    //       <Button
    //         variant="text"
    //         startIcon={<Contacts sx={{ marginRight: 1.3 }} />}
    //       >
    //         Contacts Information
    //       </Button>

    //       <Button
    //         variant="text"
    //         startIcon={<Assignment sx={{ marginRight: 1.3 }} />}
    //       >
    //         Invoices Balances
    //       </Button>
    //     </ButtonGroup>

    //     <ButtonGroup
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "flex-start",
    //         gap: 1,
    //       }}
    //     >
    //       <Typography ml={0.9}> Pages </Typography>
    //       <Button
    //         sx={{
    //           flex: 1,
    //         }}
    //         variant="text"
    //         startIcon={<Person sx={{ marginRight: 1.3 }} />}
    //       >
    //         Profile Form
    //       </Button>
    //       <Button
    //         variant="text"
    //         startIcon={<CalendarToday sx={{ marginRight: 1.3 }} />}
    //       >
    //         Calendar
    //       </Button>

    //       <Button
    //         variant="text"
    //         startIcon={<HelpOutlined sx={{ marginRight: 1.3 }} />}
    //       >
    //         FAQ Page
    //       </Button>
    //     </ButtonGroup>

    //     <ButtonGroup
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "flex-start",
    //         gap: 1,
    //       }}
    //     >
    //       <Typography ml={0.9}> Charts </Typography>
    //       <Button
    //         variant="text"
    //         startIcon={<BarChart sx={{ marginRight: 1.3 }} />}
    //       >
    //         Bar Chart
    //       </Button>
    //       <Button
    //         variant="text"
    //         startIcon={<PieChartOutlined sx={{ marginRight: 1.3 }} />}
    //       >
    //         Pie Chart
    //       </Button>

    //       <Button
    //         variant="text"
    //         startIcon={<Timeline sx={{ marginRight: 1.3 }} />}
    //       >
    //         Line Chart
    //       </Button>
    //       <Button
    //         variant="text"
    //         startIcon={<MapOutlined sx={{ marginRight: 1.3 }} />}
    //       >
    //         Geography Chart
    //       </Button>
    //     </ButtonGroup>
    //   </Stack>
    // </Stack>
  );
};

export default Sidebar;

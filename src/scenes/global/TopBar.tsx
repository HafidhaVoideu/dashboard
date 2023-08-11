import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

import { InputBase, Stack, useTheme, IconButton } from "@mui/material";

import {
  DarkModeOutlined,
  LightModeOutlined,
  SettingsOutlined,
  NotificationsOutlined,
  SearchOutlined,
  PersonOutlined,
  DarkMode,
} from "@mui/icons-material";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Stack
      p={2}
      component="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        bgcolor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase
          placeholder="Search"
          sx={{
            ml: 2,
            flex: 1,
          }}
        />

        <IconButton>
          <SearchOutlined />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={1}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>

        <IconButton>
          <SettingsOutlined fontSize="small" />
        </IconButton>

        <IconButton>
          <NotificationsOutlined fontSize="small" />
        </IconButton>

        <IconButton>
          <PersonOutlined fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default TopBar;

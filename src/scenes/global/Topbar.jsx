import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";

import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";


import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { useTranslation } from "react-i18next";

const Topbar = () => {
    const theme = useTheme(); //grabs theme 
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const { i18n } = useTranslation();

    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();


    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* search bar */}
            <Box 
                display="flex" 
                // backgroundColor={colors.primary[400]} 
                // borderRadius="3px"
            >
                {broken && (
                    <Box>
                        <IconButton type="button" sx={{m: "0 10px 0 5px"}} onClick={() => toggleSidebar()}>
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Box>
                )}
                <Box
                    display="flex" 
                    // backgroundColor={colors.primary[400]} 
                    borderRadius="3px"
                >
                    {/* <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase> */}
                    {/* <IconButton type="button" sx={{ p: 1}}>
                        <Link 
                            component={RouterLink}
                            to="/"
                            color={colors.gray[200]}
                        >
                            <HomeOutlinedIcon />
                        </Link>
                    </IconButton>     */}
                </Box>
                
            </Box>

            {/* Icons */}
            <Box display="flex" >
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton onClick={changeLanguage} value="en">
                    EN
                </IconButton>
                <IconButton onClick={changeLanguage} value="jp">
                    JP
                </IconButton>
                <IconButton 
                    // type="button" 
                    // sx={{ p: 1 }}
                    // size="small"
                >
                    <Link 
                        component={RouterLink}
                        to="/"
                        color={colors.primary[100]}
                    >
                        <HomeOutlinedIcon fontSize="large" />
                    </Link>
                </IconButton>  
                {/* <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton> */}
            </Box>
        </Box>
    )
}

export default Topbar;
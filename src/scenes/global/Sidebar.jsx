import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{color: colors.gray[200]}}
            onClick={() => setSelected(title)}
            icon={icon}
            routerLink={<Link to={to} />}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const SidebarComponent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [ selected, setSelected ] = useState("Dashboard");
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
    
    return (
        <Box
            sx={{
                "& .ps-sidebar-container": {
                    background: `${colors.primary[300]} !important`,
                },
                "& .sidebar-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .ps-menu-button:hover": {
                    color: "#868dfb !important",
                },
                "& .ps-menu-button:active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <Sidebar>
                <Menu iconshape="square"> {/* iconShape creates an error...*/}
                    <MenuItem
                        onClick={() => collapseSidebar()}
                        icon={collapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{margin: "10px 0 20px 0", color: colors.gray[100]}}
                    >
                        {!collapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h5" color={colors.gray[100]}>
                                    English Games
                                </Typography>
                                <IconButton>
                                    <MenuOutlinedIcon 
                                    sx={{ color: colors.gray[100]}}
                                    />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!collapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={'https://images.unsplash.com/photo-1604883781269-d121d9ad20f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
                                    style={{ cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.gray[100]}
                                    fontWeight="bold"
                                    sx={{m: "10px 0 0 0" }}
                                >
                                    Donald Duck
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    Aw, phooey!
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    <Box>
                        <Item 
                            title="Home"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.gray[300]}
                            sx={{ m: "15px 0 5px 20px"}}
                        >
                            Games
                        </Typography>
                        <Item 
                            title="Word Scramble"
                            to="/wordscramble"
                            icon={<AbcOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Secret Word"
                            to="/secretword"
                            icon={<PsychologyAltOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Sentence Scramble"
                            // to="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.gray[300]}
                            sx={{ m: "15px 0 5px 20px"}}
                        >
                            Pages
                        </Typography>
                        <Item 
                            title="Profile Form"
                            // to="/form"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="Calendar"
                            // to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title="FAQ"
                            // to="/faq"
                            icon={<HelpOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default SidebarComponent;
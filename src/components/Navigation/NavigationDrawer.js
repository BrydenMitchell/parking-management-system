import "../../assets/css/NavigationDrawer.css"
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import FormatAlignLeftSharpIcon from '@mui/icons-material/FormatAlignLeftSharp';
import FillWidthSpacer from "../FillWidthSpacer";
import navLogo from "../../assets/img/vfs-large-clour.png"
import React from "react";
import {theme} from "../../Theme";
import { useNavigate } from "react-router-dom"
import DateRangeIcon from '@mui/icons-material/DateRange';

function NavigationDrawer(props) {
    const drawerWidth = props.drawerWidth
    const navigate = useNavigate()
    const [selectedIndex, setSelectedIndex] = React.useState(props.index);

    const drawerStyle = {
        width: drawerWidth,
        flexShrink: 0,
        display: "flex",
        [`& .MuiDrawer-paper`]: { width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: "3px 3px 10px 0px rgba(0,0,0,0.1)",
        }
    }

    const listItemStyle = {
        "&& .Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            color: "#FFFFFF",
            fontWeight: "bold",
        },
        "&& .Mui-selected:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "#FFFFFF",
            fontWeight: "bold",
        }
    }

    const listItemButtonStyle = {
        borderRadius:  2,
        ":hover": {
            backgroundColor: theme.palette.primary.main,
            color: "#FFFFFF",
            fontWeight: "bold",
        },
    }

    function getPath(index) {
        switch (index) {
            case 0:
                return "/"
            case 1:
                return "/productions"
            case 2:
                return "/history"
            case 3:
                return "/users"
            case 4:
                return "/test"
            default:
                return "/"
        }
    }

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        navigate(getPath(index), {replace: true})
    };

    return(
        <Drawer
            variant={"permanent"}
            sx={drawerStyle}>
            <Toolbar />
            <Box sx={{ overflow: "auto",
                paddingTop: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                flexGrow: 1
            }}>
                <List>
                    <ListItem key={"nav-home"} sx={listItemStyle}>
                        <ListItemButton sx={listItemButtonStyle}
                                        selected={selectedIndex === 0}
                                        onClick={(event) => handleListItemClick(event, 0)}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"nav-productions"} sx={listItemStyle}>
                        <ListItemButton sx={listItemButtonStyle}
                                        selected={selectedIndex === 1}
                                        onClick={(event) => handleListItemClick(event, 1)}>
                            <ListItemIcon>
                                <FormatAlignLeftSharpIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Productions"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"nav-history"} sx={listItemStyle}>
                        <ListItemButton sx={listItemButtonStyle}
                                        selected={selectedIndex === 2}
                                        onClick={(event) => handleListItemClick(event, 2)}>
                            <ListItemIcon>
                                <DateRangeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"History"} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <FillWidthSpacer />
                <img style={{ padding: "20px" }} src={navLogo} alt={"Vancouver Film Studios"}/>
            </Box>
        </Drawer>
    )
}

export default NavigationDrawer
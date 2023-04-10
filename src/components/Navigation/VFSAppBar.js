import AppBar from '@mui/material/AppBar';
import {
    Button,
    Toolbar,
    Typography
} from "@mui/material";
import logo from "../../assets/img/white-v.png"
import FillWidthSpacer from "../FillWidthSpacer";
import {theme} from "../../Theme";
import {useNavigate} from "react-router-dom";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FormatAlignLeftSharpIcon from "@mui/icons-material/FormatAlignLeftSharp";
import DateRangeIcon from "@mui/icons-material/DateRange";
import {DirectionsCar} from "@mui/icons-material";


function VFSAppBar(props) {
    const logoStyle = {
        height: "50px",
        marginRight: "25px"
    }
    const toolBarStyle = {
        height: "75px",
        justifyContent: "left",
        alignItems: "center",
        background: theme.palette.primary.main,
        color: "#fff",
    }
    const navigate = useNavigate()
    const [selectedIndex, setSelectedIndex] = React.useState(props.index);

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

    const getButtonSX = (index) => {
        if (index === selectedIndex) {
            return {
                borderRadius:  2,
                color: theme.palette.primary.dark,
                backgroundColor: theme.palette.secondary.light,
                margin: "0px 10px",
                padding: "7px 10px",
                ":hover": {
                    backgroundColor: theme.palette.secondary.light,
                    color: theme.palette.primary.dark,
                },
            }
        } else {
            return {
                color: theme.palette.secondary.light,
                margin: "0px 10px",
                padding: "7px 10px",
                borderRadius:  2,
                ":hover": {
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.dark,
                },
            }
        }
    }

    return(
        <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar style={toolBarStyle}>
                <DirectionsCar />
                <Typography style={{marginLeft: 10}} variant={"h6"} noWrap component={"div"}>
                    Parking Management
                </Typography>
                <FillWidthSpacer />
                <Button sx={() => {return getButtonSX(0)}}
                        onClick={(event) => handleListItemClick(event, 0)}
                        startIcon={<HomeIcon />}>
                    Home
                </Button>
                <Button sx={() => {return getButtonSX(1)}}
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                        startIcon={<FormatAlignLeftSharpIcon />}>
                    Productions
                </Button>
                <Button sx={() => {return getButtonSX(2)}}
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                        startIcon={<DateRangeIcon />}>
                    History
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default VFSAppBar
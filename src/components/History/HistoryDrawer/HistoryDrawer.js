import React, {useState, useEffect} from 'react';
import {Box, Drawer, List, Toolbar, Typography, Select, MenuItem, InputLabel, FormControl} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import FillWidthSpacer from "../../FillWidthSpacer";
import SavedMapListItem from "./SavedMapListItem";
import {drawerWidth} from "../../../utils";

function HistoryDrawer(props) {
    const[sortingField, setSortingField] = useState('name');
    const[sortingDir, setSortingDir] = useState('asc');
    const[histories, setHistories] = useState([]);

    const sortHistory = () => {
        let tempHistories = props.stallDataManager.savedMaps || [];
        const dirMultiply = sortingDir === 'asc' ? 1 : -1;
        let sortedHistories = [];
        if (sortingField === 'name') {
            tempHistories = Object.entries(props.stallDataManager.savedMaps || []);
            sortedHistories = tempHistories.sort(([keyA], [keyB]) => {
                return keyA.localeCompare(keyB) * dirMultiply;
            })
            sortedHistories = tempHistories;
        } else {
            tempHistories = Object.entries(props.stallDataManager.savedMaps || []);
            sortedHistories = tempHistories.sort(([, savedMapA], [, savedMapB]) => {
                return savedMapA.date.localeCompare(savedMapB.date) * dirMultiply;
            })
            sortedHistories = tempHistories
        }
        setHistories([...sortedHistories])
    }

    // eslint-disable-next-line
    useEffect(()=>{
        sortHistory();
    }, [sortingDir, sortingField, props?.stallDataManager?.savedMaps])

    const drawerStyle = {
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            boxShadow: "-3px -3px 10px 0px rgba(0,0,0,0.1)",
        },
    }

    const listItemStyle = {
        display: "flex",
        flexDirection: "column",
        alignContent: "left",
        alignItems: "baseline"
    }

    return(
        <Drawer sx={drawerStyle} variant={"permanent"} anchor={"right"}>
            <Toolbar />
            <Box sx={{ overflow: "auto",
                paddingTop: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                flexGrow: 1
            }}>
                <List id={"this-list"} style={{paddingBottom: "0px"}}>
                    <ListItem key={1} sx={listItemStyle} style={{paddingBottom: "0px", paddingLeft: "26px"}}>
                        <Typography style={{ fontWeight: 600 }} variant={"h4"}>
                            History
                        </Typography>
                        <Typography variant={"body2"}>
                           Select saved maps to view or load them.
                        </Typography>
                    </ListItem>
                    <ListItem key={2} sx={listItemStyle} style={{paddingBottom: "0px", paddingLeft: "26px", display: "inline-block"}}>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="sorting-label">Sorting Field</InputLabel>
                            <Select
                                labelId="sorting-field-label"
                                id="sorting-field-select"
                                value={sortingField}
                                label="Sorting Field"
                                onChange={(e) => {
                                    setSortingField(e.target.value)
                                }}
                                size="small"
                            >
                                <MenuItem value={'name'}>Name</MenuItem>
                                <MenuItem value={'date'}>Date</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="sorting-direction-label">Sort Direction</InputLabel>
                            <Select
                                labelId="sorting-direction-label"
                                id="sorting-direction-select"
                                value={sortingDir}
                                label="Sorting Direction"
                                onChange={(e) => {
                                    setSortingDir(e.target.value)
                                }}
                                size="small"
                            >
                                <MenuItem value={'asc'}>Assending</MenuItem>
                                <MenuItem value={'desc'}>Decending</MenuItem>
                            </Select>
                        </FormControl>
                    </ListItem>                    
                </List>
                <List dense>
                    {histories.map(([key, savedMap]) => {
                        return (<SavedMapListItem
                            map={savedMap}
                            key={key}
                            mapKey={key}
                            selectedMapID={props.mapID}
                            setMapID={props.setMapID}
                            refresh={props.refresh}
                        />)
                    })}
                </List>
                <FillWidthSpacer />
                <Box sx={{ padding: 2, display: "flex", flexDirection: "row-reverse" }}>
                </Box>
            </Box>
        </Drawer>
    )
}

export default HistoryDrawer;
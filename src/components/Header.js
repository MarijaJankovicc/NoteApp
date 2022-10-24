import React from "react";
import { MenuItem, Select} from "@mui/material";
import { useNavigate} from 'react-router-dom';
import { Button } from '@material-ui/core'

export function Header({ handleToggleDarkMode, handleSort}) {

    const menuItem = [  
        {
            id: 1,
            title: "Select",
            value: "none",           
        },
        {
            id: 2,
            title: "ASCENDING",
            value: "ascending"
        },
        {
            id: 3,
            title: "DESCENDING",
            value: "descending"
        }
    ];

    const navigate = useNavigate();

    return (
        <div className="header">
            <h1><span className="first-word">React </span><span>Notes</span></h1>
            <span className="rightHeader">     
                <button className="btn" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>Toggle Mode</button>
                <Select className="sortBtn" defaultValue={'none'} onChange={handleSort}> 
                    {menuItem.map((item) => (
                        <MenuItem disabled={item.id===1} key={item.id} value={item.value}>{item.title}</MenuItem>
                    ))}
                </Select>
               
                <Button className="btn" onClick={() => navigate("/")}>Log out</Button>
            </span>
        </div>
    );
}
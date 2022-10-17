import React from "react";
import { MenuItem, Select} from "@mui/material";

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

    return (
        <div className="header">
            <h1><span className="first-word">React </span><span>Notes</span></h1>
            <span className="rightHeader">     
                <Select className="sortBtn" defaultValue={'none'} onChange={handleSort}> 
                    {menuItem.map((item) => (
                        <MenuItem disabled={item.id===1} key={item.id} value={item.value}>{item.title}</MenuItem>
                    ))}
                </Select>
                <button className="btn" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>Toggle Mode</button>
            </span>
        </div>
    );
}
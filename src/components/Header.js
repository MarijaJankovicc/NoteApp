import React from "react";
import { MenuItem, Select} from "@mui/material";

export function Header({ handleToggleDarkMode, handleSort}) {
    return (
        <div className="header">
            <h1><span className="first-word">React </span><span>Notes</span></h1>
            <span className="rightHeader">     
                <Select className="sortBtn" defaultValue={'sort'} 
                    onChange={handleSort}> 
                    <MenuItem value={'sort'} disabled>Sort</MenuItem>
                    <MenuItem value={'ascending'}>ASCENDING</MenuItem>
                    <MenuItem value={'descending'}>DESCENDING</MenuItem>            
                </Select>
                <button className="btn" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>Toggle Mode</button>
            </span>
        </div>
    );
}
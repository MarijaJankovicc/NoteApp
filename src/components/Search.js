import React from "react";
import { MdSearch } from "react-icons/md";

export function Search({ handleSearchNote }) {
    return (
        <div className="search">
            <MdSearch className="search-icons" size='1.3em'/>
            <input 
                onChange={(event) => handleSearchNote(event.target.value)} 
                type="text" 
                placeholder="Search for your notes..."
                style={{paddingTop: "15px", paddingBottom: "15px"}}/>
        </div>
    );
}
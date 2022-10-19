import {React, useState} from "react";
import { MenuItem, Select, TextField} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';

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

    const [valueStart, setValueStart] = useState(null);
    const [valueEnd, setValueEnd] = useState(null);

    return (
        <div className="header">
            <h1><span className="first-word">React </span><span>Notes</span></h1>
            <span className="rightHeader">   
                <span className="dateFilter">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className="datePicker"
                            label="Start date"
                            value={valueStart}
                            onChange={(newValueStart) => {
                            setValueStart(newValueStart);
                            }}
                            renderInput={(params) => <TextField size="small" {...params} />}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className="datePicker"
                            label="End date"
                            value={valueEnd}
                            onChange={(newValueEnd) => {
                            setValueEnd(newValueEnd);
                            }}
                            renderInput={(params) => <TextField size="small" {...params} />}
                        />
                    </LocalizationProvider>
                    {/* <Button variant="outlined">Outlined</Button> */}
                    <Button size="small" variant="text" color="success">Filter</Button>
                </span>
                <Select className="sortBtn" defaultValue={'none'} onChange={handleSort} size="small"> 
                    {menuItem.map((item) => (
                        <MenuItem disabled={item.id===1} key={item.id} value={item.value}>{item.title}</MenuItem>
                    ))}
                </Select>
                <button className="btn" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>Toggle Mode</button>
            </span>
        </div>
    );
}
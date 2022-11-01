import {React} from 'react';
import { MenuItem, Select, TextField} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker} from '@mui/x-date-pickers/DatePicker';
import { useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Header=({ handleToggleDarkMode, handleSort, handleDateFilter,
                handleResetFilter, valueStart, valueEnd, handleStartDate, handleEndDate }) => {

  const menuItem = [
    {
      id: 1,
      title: 'Select',
      value: 'none',
    },
    {
      id: 2,
      title: 'ASCENDING',
      value: 'ascending'
    },
    {
      id: 3,
      title: 'DESCENDING',
      value: 'descending'
    }
  ];

  const navigate = useNavigate();

  const signout = async () => {
    await signOut(auth).then(() => {
      console.log('successful log out');
    }).catch((error) => {
      console.log(error.message);
    });
    navigate('/');
  };

  return (
    <div>
      <div className='header'>
        <div>
          <h1><span className='first-word'>React </span><span>Notes</span></h1>
        </div>
        <span className='rightHeader'>
          <div className='dateFilter'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className='datePicker'
                label='Start date'
                value={valueStart}
                onChange={handleStartDate}
                renderInput={(params) => <TextField size='small' {...params} />}/>
              <DatePicker
                className='datePicker'
                label='End date'
                value={valueEnd}
                minDate = {valueStart}
                onChange={handleEndDate}
                renderInput={(params) => <TextField size='small' {...params} />}/>
            </LocalizationProvider>
            <button className='btnFilter' onClick={() => handleDateFilter(valueStart, valueEnd)}>Filter</button>
            <button className='btnFilter' onClick={handleResetFilter}>Reset</button>
          </div>
          <Select className='sortBtn' defaultValue={'none'} onChange={handleSort} size='small'>
            {menuItem.map((item) => (
              <MenuItem disabled={item.id===1} key={item.id} value={item.value}>{item.title}</MenuItem>
            ))}
          </Select>
          <button className='btn' onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>Toggle Mode</button>
          <button color='success' className='btn' onClick={signout}>Sign out</button>
        </span>
      </div>
      <div className='title'><h3>Hello, {auth.currentUser.displayName}!</h3></div>
    </div>
  );
};

Header.propTypes = {
  handleToggleDarkMode: PropTypes.func,
  handleSort: PropTypes.func,
  handleDateFilter: PropTypes.func,
  handleResetFilter: PropTypes.func,
  valueStart: PropTypes.object,
  valueEnd: PropTypes.object,
  handleStartDate: PropTypes.func,
  handleEndDate: PropTypes.func,
};

export default Header;
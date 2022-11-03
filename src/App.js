import { React } from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NoteApp from './components/NoteApp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App=() => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/app' element={<NoteApp />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

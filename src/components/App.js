import React from 'react';
import SideBar from './SideBar';
import Wrapper from './Wrapper';
import '../assets/css/app.css'

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
     <Wrapper />
     <SideBar />
     </div>
    </React.Fragment>
  );
}

export default App;

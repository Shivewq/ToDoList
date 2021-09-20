import React, { FC } from 'react';
import { headStyles, bodyStyle } from './components/styles/styles';
//Import Components
import Form from "./components/Form";


const App: FC = () => {
  return (
    <body style={bodyStyle} className="app">
     <div className="header">
       <h1 style={headStyles}>Tasks To Do</h1>
     </div>
     <Form/>
    </body>
  );
}

export default App;

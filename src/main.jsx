// main.jsx

import React from 'react'; // ✅ Required for JSX
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // or App.css if you're using that

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);









// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css"; // Tailwind should be set up here

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

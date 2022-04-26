// STYLES
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

import { StrictMode } from "react";
import { render } from "react-dom";
import { ToastContainer } from 'react-toastify';
import reportWebVitals from './reportWebVitals';

// APP
import App from './App';


render(
  <StrictMode>
    <ToastContainer
      autoClose={3000}
      hideProgressBar={true}
      closeOnClick
      position={'top-right'}
    />
    <App />
  </StrictMode>,
  document.getElementById('root')
);

const isDev = process.env.NODE_ENV === "development";
isDev && reportWebVitals(console.log);

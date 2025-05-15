import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes/AllRoutes";
import { ToastContainer, toast, TypeOptions } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

function App() {

  return (
    <div className="App">
      <Routes />
      <ToastContainer
        newestOnTop
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;

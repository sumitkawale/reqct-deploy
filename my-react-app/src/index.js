import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ToDoApp from "./ToDo-List/App"

if (window.location.pathname === "/reqct-deploy/") {
  ReactDOM.render(
    <React.StrictMode>
      <App
        key="mainApp"
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(<ToDoApp />, document.getElementById("root"))
}
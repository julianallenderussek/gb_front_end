import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeter from './Greeter';
import LikeButton from './LikeButton';

let numBtn = 10;
let likeButtons = [];

for (let i = 0; i < numBtn; i++) {
  likeButtons.push(<LikeButton/>)
}; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Greeter />
      {likeButtons}
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

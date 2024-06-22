// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // import App from './App';
// // import './index.css';

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <Router>
// //     <App />
// //   </Router>
// // );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(rootElement);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


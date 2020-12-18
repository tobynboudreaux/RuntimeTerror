import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import EditUser from './users/EditUser';
import EditListing from './listings/EditListing';
import AuthRoutes from './routing/AuthRoutes';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>

            {/* Routing here for now */}
            <nav>
              <ul>
                <li>
                  <Link to="/">Landing {/* Landing will go here */}</Link>
                </li>
                <li>
                  <Link to="/editUser">Edit User</Link>
                </li>
                <li>
                  <Link to="/editListing">Edit Listing</Link>
                </li>
              </ul>
            </nav>
            <Route path="/editUser" component={EditUser} />
            <Route path="/editListing" component={EditListing} />
            {/* If user is signed in */}
            <AuthRoutes />
          </span>
        </header>
      </div>
    </Router>
  );
}

export default App;

// import React from 'react';
// import AuthRoutes from './components/routing/AuthRoutes';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
// import Navbar from './components/layout/Navbar';
// import Routes from './components/routing/Routes';
// import "./App.css"
// // Redux
// import Landing from './components/layout/Landing';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//             {/* Routing here for now */}
//             <Navbar />

//             <Switch>
//               <Route exact path="/" component={Landing} />
//               <Routes />
//               <AuthRoutes />
//             </Switch>
//         </header>
//       </div>
//     </Router>
//   );
// }

// export default App;

import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { addListing, removeListing } from "./store/actionCreators"
import { Dispatch } from "redux"
import {AddListing} from "./components/test/AddListing"
import {Listing} from "./components/test/Listing"

const App: React.FC = () => {
  const listings: readonly IListing[] = useSelector(
    (state: ListingState) => state.listings,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveListing = React.useCallback(
    (listing: IListing) => dispatch(addListing(listing)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Listings</h1>
      <AddListing saveListing={saveListing} />
      {listings.map((listing: IListing) => (
        <Listing
          key={listing.id}
          listing={listing}
          removeListing={removeListing}
        />
      ))}
    </main>
  )
}

export default App
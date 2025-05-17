import "./App.css";
import { onChildAdded, push, ref, set } from "firebase/database";
import { database } from "./firebase";
import { useState, useEffect } from "react";
///
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import AuthForm from "./components/AuthForm";
import Composer from "./components/Composer";
import Newsfeed from "./components/NewsFeed";
import Chat from "./components/Chat";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [shouldRenderAuthForm, setShouldRenderAuthForm] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoggedInUser(user);
    });
  }, []);

  const toggleAuthForm = () => {
    setShouldRenderAuthForm(!shouldRenderAuthForm);
  };

  if (loggedInUser) {
    console.log("Logged in user:", loggedInUser);
    return (
      <div>
        <h1>Instagram Bootcamp</h1>
        <Dashboard />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Instagram Bootcamp</h1>
        {shouldRenderAuthForm ? (
          <AuthForm toggleAuthForm={toggleAuthForm} />
        ) : (
          <button onClick={toggleAuthForm}>Create Account or Sign In</button>
        )}
      </div>
    );
  }
}
//    return (
//      <>
//        <h1>Instagram Bootcamp</h1>
//        <div>
//          {shouldRenderAuthForm ? (
//            <AuthForm toggleAuthForm={toggleAuthForm} />
//          ) : (
//            <div>
//              {loggedInUser ? (
//                <>
//                  <Newsfeed />
//                  <Composer />
//                </>
//              ) : (
//                <button onClick={toggleAuthForm}>
//                  Create Account or Sign In
//                </button>
//              )}
//            </div>
//          )}
//        </div>
//      </>
//    );
//  }

export default App;

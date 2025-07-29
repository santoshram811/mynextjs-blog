"use client";
import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodingHome() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when article loads
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Login and Logout Functionality using Context API in React
      </h1>

      <p className="mb-4">
        In modern React applications, the Context API is a powerful tool for
        managing global state — like whether a user is logged in or not. Instead
        of prop drilling or lifting state up unnecessarily, we can use the
        Context API to cleanly manage login/logout logic across components.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        🔥 Why Use Context API for Login/Logout?
      </h2>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Manage authentication state globally</li>
        <li>Avoid prop drilling through multiple components</li>
        <li>Easy access to login status and user info from anywhere</li>
        <li>Cleaner and more scalable code</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        📍 Where Is This Useful?
      </h2>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>Admin dashboards</li>
        <li>Protected routes</li>
        <li>Multi-role user login systems</li>
        <li>Any app that requires user login/logout</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">📦 Example Code</h2>

      <p className="font-bold text-lg mt-4 mb-2">👉 CrudContext.jsx</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {`import { createContext, useState } from "react";

export const CrudContext = createContext();

export const AppProvider = ({ children }) => {
  const [isloggedin, setIsloggedin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (username, password) => {
    let options = {
      user: "Koushik",
      pass: "123456",
    };
    if (username === options.user && password === options.pass) {
      setUsername(username);
      setPassword(password);
      setIsloggedin(true);
      return true;
    } else {
      setIsloggedin(false);
      return false;
    }
  };

  const logout = () => setIsloggedin(false);

  return (
    <CrudContext.Provider value={{ isloggedin, login, logout }}>
      {children}
    </CrudContext.Provider>
  );
};`}
      </SyntaxHighlighter>

      <p className="font-bold text-lg mt-4 mb-2">👉 Login.jsx</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {`import React, { useContext, useRef, useState } from "react";
import { CrudContext } from "../../context/CrudContext";

const Login = () => {
  const errref = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let { login, isloggedin } = useContext(CrudContext);

  const handleclick = () => {
    isloggedin = login(username, password);
    if (isloggedin) {
      alert("Success");
    } else {
      alert("Something went wrong");
      errref.current.innerHTML = "Something went wrong";
      errref.current.style.color = "red";
    }
  };

  return (
    <div className="container">
      <div className="form-group">
        <label>UserName</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
        <p ref={errref}></p>
        <button className="btn btn-success mt-3" onClick={handleclick}>Login</button>
      </div>
    </div>
  );
};

export default Login;`}
      </SyntaxHighlighter>

      <p className="font-bold text-lg mt-4 mb-2">👉 Dashboard.jsx</p>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {`import { useContext } from "react";
import { CrudContext } from "../../context/CrudContext";

const Dashboard = () => {
  const { logout } = useContext(CrudContext);

  return (
    <div>
      <h4>Welcome to my dashboard.</h4>
      <button className="btn btn-danger" onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;`}
      </SyntaxHighlighter>

      <h2 className="text-2xl font-semibold mt-8 mb-2">💡 Explanation</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>
          We created a context (`CrudContext`) to hold the login state globally.
        </li>
        <li>
          The `AppProvider` wraps the entire app so any component can use
          login/logout functionality.
        </li>
        <li>
          `Login` uses `login()` function and updates state if credentials are
          correct.
        </li>
        <li>
          `Dashboard` displays a logout button using `logout()` from context.
        </li>
        <li>
          The condition in `App.jsx` displays `Dashboard` only when logged in.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">
        🎯 Interview Questions
      </h2>

      <ul className="list-disc pl-6 mb-10 space-y-3">
        <li>
          <strong>Q:</strong> Why would you use Context API over Redux?
          <br />
          <strong>A:</strong> For small to medium apps, Context API is lighter,
          built-in, and easier to manage.
        </li>
        <li>
          <strong>Q:</strong> Can we use useReducer with Context API?
          <br />
          <strong>A:</strong> Yes, to manage more complex logic in global state.
        </li>
        <li>
          <strong>Q:</strong> How do you protect routes using Context?
          <br />
          <strong>A:</strong> Use a conditional route render or a `PrivateRoute`
          wrapper based on context's auth state.
        </li>
        <li>
          <strong>Q:</strong> Is Context API suitable for large applications?
          <br />
          <strong>A:</strong> For large-scale state, it’s better to use Redux or
          Zustand for more performance and debugging tools.
        </li>
      </ul>
    </div>
  );
}

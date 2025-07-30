"use client";

import React, { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const crudContextCode = `
import { createContext, useState } from "react";

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
};
`;

const loginComponentCode = `
import React, { useContext, useRef, useState } from "react";
import { CrudContext } from "../../context/CrudContext";

export default function Login() {
  const { login } = useContext(CrudContext);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const isSuccess = login(username, password);
    if (!isSuccess) {
      setError("Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={usernameRef} placeholder="Username" required />
      <input type="password" ref={passwordRef} placeholder="Password" required />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}
`;

const dashboardComponentCode = `
import { useContext } from "react";
import { CrudContext } from "../../context/CrudContext";

export default function Dashboard() {
  const { logout } = useContext(CrudContext);

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
`;

const ContextApiBlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">
        🚀 Login & Logout with Context API in React
      </h1>

      <p className="text-lg mb-4 leading-relaxed">
        React's Context API is a powerful way to manage global state without
        prop drilling. This blog explores how to build a login/logout system
        using Context API, step-by-step with examples, and finishes with 15
        commonly asked interview questions!
      </p>

      <hr className="my-6 border-gray-600" />

      <h2 className="text-2xl font-semibold mb-2 text-yellow-400">
        📌 What is Context API?
      </h2>
      <p className="mb-4">
        Context API is a way to manage and share state across the component tree
        without passing props manually at every level.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-yellow-400">
        🧠 Why use Context API as a MERN developer?
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>🔄 Avoids prop drilling between deeply nested components</li>
        <li>📦 Centralizes global state management</li>
        <li>✅ Makes login/logout logic cleaner</li>
        <li>🌐 Perfect for user sessions, themes, auth, etc.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-yellow-400">
        ✅ Pros of Context API
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Lightweight and built-in (no external library needed)</li>
        <li>Great for static or small-scale global state</li>
        <li>Reduces prop drilling and clutter</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-yellow-400">
        ❌ Cons of Context API
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Not suitable for high-frequency state updates</li>
        <li>May lead to unnecessary re-renders if not used carefully</li>
        <li>
          Use Redux, Zustand, or Jotai for large apps with complex state logic
        </li>
      </ul>

      <hr className="my-6 border-gray-600" />

      <h2 className="text-2xl font-bold mb-3 text-green-400">
        👨‍💻 1. Create CrudContext
      </h2>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {crudContextCode}
      </SyntaxHighlighter>

      <h2 className="text-2xl font-bold mb-3 text-green-400">
        🔐 2. Create Login Component
      </h2>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {loginComponentCode}
      </SyntaxHighlighter>

      <h2 className="text-2xl font-bold mb-3 text-green-400">
        📊 3. Create Dashboard Component
      </h2>
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {dashboardComponentCode}
      </SyntaxHighlighter>

      <p className="mt-6 text-lg">
        You can now control login/logout globally and protect pages using this
        logic. Simple and powerful!
      </p>

      <hr className="my-10 border-gray-600" />

      <h2 className="text-3xl font-bold mb-4 text-pink-400">
        🎯 Top 15 React Context API Interview Questions with Answers
      </h2>

      <div className="space-y-6">
        {interviewQuestions.map((qna, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-300">
              {index + 1}. {qna.question}
            </h3>
            <p className="mb-2">{qna.answer}</p>
            {qna.code && (
              <SyntaxHighlighter language="jsx" style={oneDark}>
                {qna.code}
              </SyntaxHighlighter>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Add your actual code and questions below
const interviewQuestions = [
  {
    question: "What is the Context API in React?",
    answer:
      "The Context API allows you to pass data through the component tree without manually passing props at every level.",
    code: `
import { createContext } from 'react';
const UserContext = createContext();`,
  },
  {
    question: "How do you create a context?",
    answer: "You use React's createContext function.",
    code: `
const ThemeContext = React.createContext('light');`,
  },
  {
    question: "How do you provide context to components?",
    answer: "Wrap components inside the Provider component of the context.",
    code: `
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>`,
  },
  {
    question: "How do you consume context?",
    answer: "Use useContext hook.",
    code: `
const theme = useContext(ThemeContext);`,
  },
  {
    question: "What is a real-world use case of Context API?",
    answer: "Authentication state (like login/logout) is a common use case.",
  },
  {
    question: "What are alternatives to Context API?",
    answer: "Redux, Recoil, Zustand, MobX, Jotai, etc.",
  },
  {
    question: "What are the drawbacks of Context API?",
    answer: "Not ideal for high-frequency state updates due to re-renders.",
  },
  {
    question: "Can you use multiple contexts in one component?",
    answer: "Yes, you can use multiple useContext hooks.",
    code: `
const auth = useContext(AuthContext);
const theme = useContext(ThemeContext);`,
  },
  {
    question: "What is prop drilling, and how does Context API solve it?",
    answer:
      "Prop drilling is passing props through many layers. Context API avoids this by making data available to any component directly.",
  },
  {
    question: "How to optimize performance when using Context?",
    answer:
      "Split contexts and memoize values to reduce unnecessary re-renders.",
  },
  {
    question: "How is Context API different from Redux?",
    answer:
      "Redux provides centralized state management with middleware and dev tools. Context API is built-in and simpler, suitable for small apps.",
  },
  {
    question: "Can you set multiple values in one context?",
    answer: "Yes, typically done using an object.",
    code: `
<Context.Provider value={{ name: "John", age: 25 }} />`,
  },
  {
    question: "Should Context API be used for all states?",
    answer:
      "No. Use Context for global/shared states only. For local component state, use useState/useReducer.",
  },
  {
    question: "Can useReducer be used with Context?",
    answer: "Yes. You can pass reducer state and dispatch via Context.",
    code: `
const [state, dispatch] = useReducer(reducer, initialState);
<Context.Provider value={{ state, dispatch }} />`,
  },
  {
    question: "How to share a login state across pages?",
    answer:
      "Create an AuthContext and provide it at the app root. Use useContext on any page.",
  },
];

export default ContextApiBlogPage;

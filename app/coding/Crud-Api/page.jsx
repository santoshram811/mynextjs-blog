"use client";

import React, { useEffect } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CrudApiBlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-white ">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">
        🔄 Understanding CRUD Operations in React (MERN)
      </h1>

      <p className="text-lg mb-6">
        CRUD (Create, Read, Update, Delete) operations are the backbone of
        data-driven web apps. As a MERN stack developer, mastering these is
        essential for building interactive, real-world applications.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
        📌 What is CRUD in React?
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>
          ➕ <strong>Create</strong>: Add new data (POST)
        </li>
        <li>
          📥 <strong>Read</strong>: Fetch and display data (GET)
        </li>
        <li>
          ✏️ <strong>Update</strong>: Modify existing data (PUT/PATCH)
        </li>
        <li>
          🗑 <strong>Delete</strong>: Remove data (DELETE)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
        🧠 Why is it Needed in React?
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>🔄 Allows interaction with backend servers and databases</li>
        <li>📦 Enables user-driven, dynamic interfaces</li>
        <li>⚙️ Connects React frontend to real-time backend APIs</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
        🚀 Why It's Important for MERN Developers
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>💻 React (frontend) handles UI</li>
        <li>🔌 Express & Node (backend) process API requests</li>
        <li>🗃 MongoDB stores data</li>
        <li>💬 CRUD connects all layers to form full-stack apps</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-green-400">
        ✅ Pros of CRUD in React
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>🔓 Complete control over UI and data</li>
        <li>📡 Seamless backend communication via Axios/Fetch</li>
        <li>🛠 Real-world project ready</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-red-400">
        ❌ Challenges / Drawbacks
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>🔁 Need to manage async and state properly</li>
        <li>⚠️ Error handling and validation is required</li>
        <li>🧠 Understanding HTTP methods, backend flow is essential</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-pink-400">
        📌 Example Code Snippets
      </h2>

      <div className="bg-gray-800 p-4 rounded-xl mb-4">
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {`// 📥 Read - Fetch data
useEffect(() => {
  axios.get("/api/users").then((res) => setUsers(res.data));
}, []);`}
        </SyntaxHighlighter>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl mb-4">
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {`// ➕ Create - Add data
axios.post("/api/users", { name: "Santosh", age: 28 });`}
        </SyntaxHighlighter>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl mb-4">
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {`// ✏️ Update - Modify data
axios.put("/api/users/123", { name: "Updated Name" });`}
        </SyntaxHighlighter>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl">
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {`// 🗑 Delete - Remove data
axios.delete("/api/users/123");`}
        </SyntaxHighlighter>
      </div>

      <p className="mt-8 text-lg italic text-center text-gray-400">
        💡 CRUD = Core Skill for React Developers | Practice it daily
      </p>
      <section className="text-white bg-[#0a0a23] px-6 py-12 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-green-400 mb-10 text-center">
          🔥 Top 15 CRUD API Interview Questions & Answers
        </h1>

        <div className="space-y-10 text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              1️⃣ What is CRUD?
            </h2>
            <p>
              CRUD stands for <strong>Create, Read, Update, and Delete</strong>.
              These are the four basic operations performed in most web apps for
              managing data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              2️⃣ How does CRUD relate to HTTP methods?
            </h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>POST</strong> - Create
              </li>
              <li>
                <strong>GET</strong> - Read
              </li>
              <li>
                <strong>PUT / PATCH</strong> - Update
              </li>
              <li>
                <strong>DELETE</strong> - Delete
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              3️⃣ How do you perform a Create operation in React?
            </h2>
            <pre className="bg-gray-800 text-green-300 p-4 rounded-md overflow-x-auto">
              axios.post("/api/users", &#123; name: "John", age: 25 &#125;);
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              4️⃣ How does Read operation work in React with Axios?
            </h2>
            <pre className="bg-gray-800 text-green-300 p-4 rounded-md overflow-x-auto">
              {`useEffect(() => {
  axios.get("/api/users").then((res) => setUsers(res.data));
}, []);`}
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              5️⃣ What is the difference between PUT and PATCH?
            </h2>
            <p>
              <strong>PUT</strong> replaces the entire resource, while{" "}
              <strong>PATCH</strong> updates only the specified fields.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              6️⃣ How do you update a user in React?
            </h2>
            <pre className="bg-gray-800 text-green-300 p-4 rounded-md overflow-x-auto">
              axios.put("/api/users/123", &#123; name: "Updated Name" &#125;);
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              7️⃣ How to delete a record via API in React?
            </h2>
            <pre className="bg-gray-800 text-green-300 p-4 rounded-md overflow-x-auto">
              axios.delete("/api/users/123");
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              8️⃣ Why is CRUD important in MERN stack development?
            </h2>
            <p>
              CRUD is essential to connect the frontend (React) with the backend
              (Express/Node.js) and the database (MongoDB), allowing full data
              manipulation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              9️⃣ What tools are used to test CRUD APIs?
            </h2>
            <p>Popular tools include Postman, Swagger, Curl, and Insomnia.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              🔟 What is Axios and why use it?
            </h2>
            <p>
              Axios is a promise-based HTTP client used in React to send CRUD
              requests to APIs easily and effectively.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              1️⃣1️⃣ What status codes should CRUD API return?
            </h2>
            <ul className="list-disc pl-6">
              <li>✅ 200 OK – Successful request</li>
              <li>🆕 201 Created – Resource created</li>
              <li>⚠️ 400 Bad Request – Invalid input</li>
              <li>❌ 404 Not Found – Resource missing</li>
              <li>💥 500 Internal Server Error – Server problem</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              1️⃣2️⃣ How do you handle form inputs in React for CRUD?
            </h2>
            <p>
              Use <code>useState()</code> to manage form data, bind inputs, and
              then send via Axios for create/update operations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              1️⃣3️⃣ How do you manage loading and errors in Axios requests?
            </h2>
            <pre className="bg-gray-800 text-green-300 p-4 rounded-md overflow-x-auto">
              {`try {
  const res = await axios.get("/api/users");
  setData(res.data);
} catch (err) {
  setError(err.message);
}`}
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              1️⃣4️⃣ How do you render fetched data in React?
            </h2>
            <pre className="bg-gray-800 text-green-300 p-4 rounded-md overflow-x-auto">
              {`{users.map((user) => (
  <p key={user.id}>{user.name}</p>
))}`}
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-yellow-400">
              1️⃣5️⃣ What security measures should a CRUD API follow?
            </h2>
            <ul className="list-disc pl-6">
              <li>🧼 Input validation</li>
              <li>🔐 Authentication & Authorization (JWT, OAuth)</li>
              <li>🚫 Rate limiting</li>
              <li>📋 Proper error messaging</li>
              <li>🧯 Avoid SQL/NoSQL injection</li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-lg text-center italic text-blue-300">
          🚀 Mastering these CRUD concepts will help you ace your next
          full-stack interview and build real-world apps!
        </p>
      </section>
    </div>
  );
};

export default CrudApiBlogPage;

// "use client";

// import React, { useEffect } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// const CrudApiBlogPage = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8 text-white">
//       <h1 className="text-4xl font-bold mb-6 text-blue-400">
//         🔄 Understanding CRUD Operations in React (MERN)
//       </h1>

//       <p className="text-lg mb-6">
//         CRUD (Create, Read, Update, Delete) operations are the backbone of
//         data-driven web apps. As a MERN stack developer, mastering these is
//         essential for building interactive, real-world applications.
//       </p>

//       {/* CRUD Explanation Sections */}
//       <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
//         📌 What is CRUD in React?
//       </h2>
//       <ul className="list-disc pl-6 mb-6 space-y-1">
//         <li>
//           ➕ <strong>Create</strong>: Add new data (POST)
//         </li>
//         <li>
//           📥 <strong>Read</strong>: Fetch and display data (GET)
//         </li>
//         <li>
//           ✏️ <strong>Update</strong>: Modify existing data (PUT/PATCH)
//         </li>
//         <li>
//           🗑 <strong>Delete</strong>: Remove data (DELETE)
//         </li>
//       </ul>

//       <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
//         🧠 Why is it Needed in React?
//       </h2>
//       <ul className="list-disc pl-6 mb-6 space-y-1">
//         <li>🔄 Allows interaction with backend servers and databases</li>
//         <li>📦 Enables user-driven, dynamic interfaces</li>
//         <li>⚙️ Connects React frontend to real-time backend APIs</li>
//       </ul>

//       <h2 className="text-2xl font-semibold mb-3 text-yellow-400">
//         🚀 Why It's Important for MERN Developers
//       </h2>
//       <ul className="list-disc pl-6 mb-6 space-y-1">
//         <li>💻 React (frontend) handles UI</li>
//         <li>🔌 Express & Node (backend) process API requests</li>
//         <li>🗃 MongoDB stores data</li>
//         <li>💬 CRUD connects all layers to form full-stack apps</li>
//       </ul>

//       <h2 className="text-2xl font-semibold mb-3 text-green-400">
//         ✅ Pros of CRUD in React
//       </h2>
//       <ul className="list-disc pl-6 mb-6 space-y-1">
//         <li>🔓 Complete control over UI and data</li>
//         <li>📡 Seamless backend communication via Axios/Fetch</li>
//         <li>🛠 Real-world project ready</li>
//       </ul>

//       <h2 className="text-2xl font-semibold mb-3 text-red-400">
//         ❌ Challenges / Drawbacks
//       </h2>
//       <ul className="list-disc pl-6 mb-6 space-y-1">
//         <li>🔁 Need to manage async and state properly</li>
//         <li>⚠️ Error handling and validation is required</li>
//         <li>🧠 Understanding HTTP methods, backend flow is essential</li>
//       </ul>

//       {/* Code Snippets */}
//       <h2 className="text-2xl font-semibold mb-3 text-pink-400">
//         📌 Example Code Snippets
//       </h2>

//       {[
//         {
//           title: "📥 Read - Fetch data",
//           code: `useEffect(() => {
//   axios.get("/api/users").then((res) => setUsers(res.data));
// }, []);`,
//         },
//         {
//           title: "➕ Create - Add data",
//           code: `axios.post("/api/users", { name: "Santosh", age: 28 });`,
//         },
//         {
//           title: "✏️ Update - Modify data",
//           code: `axios.put("/api/users/123", { name: "Updated Name" });`,
//         },
//         {
//           title: "🗑 Delete - Remove data",
//           code: `axios.delete("/api/users/123");`,
//         },
//       ].map((block, index) => (
//         <div key={index} className="bg-gray-800 p-4 rounded-xl mb-4">
//           <SyntaxHighlighter language="javascript" style={oneDark}>
//             {block.code}
//           </SyntaxHighlighter>
//         </div>
//       ))}

//       <p className="mt-8 text-lg italic text-center text-gray-400">
//         💡 CRUD = Core Skill for React Developers | Practice it daily
//       </p>

//       {/* Color Styling Blog */}
//       <h2 className="text-3xl font-bold mt-16 mb-4 text-orange-400">
//         🎨 Managing Text and Background Colors in Different Pages (Next.js +
//         Tailwind)
//       </h2>
//       <p className="mb-4">
//         In modern web design, having **different color schemes** for different
//         pages improves UX and gives your app a vibrant feel.
//       </p>

//       <h3 className="text-xl font-semibold text-green-300 mb-2">
//         🛠 Why Manage Colors Per Page?
//       </h3>
//       <ul className="list-disc pl-6 space-y-1 mb-6">
//         <li>✅ Better user experience and readability</li>
//         <li>✅ Each page can reflect its purpose or mood</li>
//         <li>✅ Makes your app stand out with consistent branding</li>
//       </ul>

//       <h3 className="text-xl font-semibold text-green-300 mb-2">
//         📦 How to Do It
//       </h3>
//       <ul className="list-decimal pl-6 space-y-2 mb-6">
//         <li>
//           Define custom styles using Tailwind classes on the root container
//           (`div`) inside each page.
//         </li>
//         <li>
//           Example:
//           <SyntaxHighlighter language="jsx" style={oneDark}>
//             {`<div className="bg-black text-white min-h-screen">Page Content</div>`}
//           </SyntaxHighlighter>
//         </li>
//         <li>
//           You can use conditional styles using `usePathname()` from
//           `next/navigation` in layout/page components to switch background/text
//           colors.
//         </li>
//       </ul>

//       <h3 className="text-xl font-semibold text-green-300 mb-2">💡 Tips</h3>
//       <ul className="list-disc pl-6 mb-6">
//         <li>Use `min-h-screen` to ensure full height color fill</li>
//         <li>Use `text-white`, `text-gray-800`, etc., to change text color</li>
//         <li>Create a layout wrapper component if you want consistent logic</li>
//       </ul>

//       <p className="italic text-gray-400 mt-8 text-center">
//         🌈 Customize color per route to make your app dynamic and beautiful.
//       </p>
//     </div>
//   );
// };

// export default CrudApiBlogPage;

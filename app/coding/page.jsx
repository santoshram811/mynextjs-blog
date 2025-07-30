"use client";
import Link from "next/link";

export default function CodingList() {
  const blogs = [
    { slug: "context-api", title: "🔐 Login & Logout using Context API" },
    { slug: "Crud-Api", title: "Complete Api Crud Operation in React" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
          🚀 Coding Blog Articles
        </h1>

        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog.slug}>
              <Link href={`/coding/${blog.slug}`} className="block">
                <div className="bg-white hover:bg-blue-100 p-5 rounded-xl shadow-md transition-all duration-300 border border-gray-200 cursor-pointer">
                  <h2 className="text-xl font-semibold text-blue-700  hover:text-red-900 transition duration-200">
                    {blog.title}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <br />

        <p className="mt-10 text-gray-600 text-center text-lg italic">
          More articles coming soon...
        </p>
      </div>
    </div>
  );
}

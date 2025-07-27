import "./globals.css"; // ✅ Make sure this file exists
import "../i18n"; // ✅ Load i18n once globally
import Navbar from "../components/Navbar"; // ✅ Import the Navbar

export const metadata = {
  title: "My Multilingual Blog",
  description: "Blog with i18n",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Add the Navbar here */}
        {children}
      </body>
    </html>
  );
}

import { Metadata } from "next";
import Sidebar from "./components/sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Josh Richards",
    template: "%s | Josh Richards",
  },
  description: "Software Engineer at Xero",
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="text-black bg-white dark:text-white dark:bg-[#111010]"
    >
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Sidebar />
        <main className="flex flex-col min-w-0 mt-6 md:mt-0 px-2 md:px-0">
          {children}
        </main>
        <script
          defer
          data-domain="josh.work"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  );
}

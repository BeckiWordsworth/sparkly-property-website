import React from "react";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "SparklyProperty | Find The Perfect Home",
  description: "Find your perfect new home",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>;
      </body>
    </html>
  );
};

export default MainLayout;

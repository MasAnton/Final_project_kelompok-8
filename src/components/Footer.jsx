import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="mt-20 flex bg-[rgb(19,19,19)] w-full h-[100px] justify-between p-5 align-middle font-semibold">
        <div class="flex items-center p-5">
          <img src="../assets/logo.png" className="h-[80px] " alt="" />
        </div>
        <div class="flex items-center gap-3 text-white p-5">
          <a href="/" class=" hover:bg-red-900 p-2 rounded-lg">
            Home
          </a>
          <a href="/" class="hover:bg-red-900 p-2 rounded-lg">
            Movies
          </a>
          <a href="/" class="hover:bg-red-900 p-2 rounded-lg">
            TV Series
          </a>
          <a href="/" class="hover:bg-red-900 p-2 rounded-lg">
            Search
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

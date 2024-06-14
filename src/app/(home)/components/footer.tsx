import React from "react";

export default function footer() {
  return (
    <footer className="rounded-lg shadow m-4 bg-gray-800" >
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-gray-400">
          © 2023{" "}Paweł Waszkiewicz
          {/* <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a> */}
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
          <li>
            <a href="https://pl.linkedin.com/in/pawelwaszkiewicz" className="hover:underline me-4 md:me-6">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/realpvblo" className="hover:underline me-4 md:me-6">
              GitHub
            </a>
          </li>
          {/* <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li> */}
          <li>
            <a href="mailto:pawel.waszkiewicz99@gmail.com" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

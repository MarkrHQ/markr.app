import React, { Component } from "react";
import Logo from "../components/Logo"

class HomePage extends Component {
  render() {
    return (
      <>
        <main className="container flex justify-center flex-col items-center mt-10 mb-4 py-8 mx-4 px-2 lg:px-0 lg:mx-auto">
          <Logo className="w-32 lg:w-40 mx-w-40" />
          <h1 className="font-black text-3xl lg:text-4xl">Markr.app</h1>
          <p className="text-lg pb-8">
            Markr is a browser extension which lets you highlight and capture content on the web like a marker.
          </p>
          <a href="mailto:bilal@markr.app?subject=Request for early access" className="px-4 py-2 mb-2 text-lg bg-yellow-200 font-bold border border-yellow-300 hover:border-yellow-400 rounded hover:shadow-lg">
            Request Early Access
          </a>
        <a href="https://twitter.com/markr_app" target="_blank" className="hover:underline">Follow us on Twitter @markr_app</a>
        </main>
        <footer className="container mx-auto flex justify-center">
          <p className="text-gray-800">
            All rights reserved. Copyrights protected 2020.
          </p>
        </footer>
      </>
    );
  }
}

export default HomePage;

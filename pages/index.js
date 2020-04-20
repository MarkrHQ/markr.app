import React, { Component } from "react";
import Logo from "../components/Logo"

class HomePage extends Component {
  render() {
    return (
      <>
        <main className="bg-white container flex justify-center flex-col items-center mt-10 mb-4 py-8 mx-4 px-2 lg:px-0 lg:mx-auto rounded border shadow">
          <Logo />
          <h1 className="font-black text-3xl lg:text-4xl">Markr.app</h1>
          <p className="text-lg pb-8">
            Markr is a browser extension which lets you highlight and capture content on the web like a marker.
        </p>
          <a href="mailto:bilal@markr.app?subject=Request for early access" className="px-4 py-2 text-lg bg-yellow-200 font-bold border border-yellow-300 hover:border-yellow-400 rounded">
            Request Early Access
        </a>
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

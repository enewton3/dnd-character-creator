import React from "react";
import Footer from "./Footer";
import Nav from "./Nav/Nav";

export default function Layout(props) {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
}

import React, { useState } from "react";
import GoogleSignInButton from "../components/Auth/GoogleSignInButton";

export default function Home() {
  return (
    <div>
      <h2>Create D&D 5E Characters</h2>
      <h3>
        Print the sheet right away,
        <br /> or sign in and save them in our database for later
      </h3>
      <GoogleSignInButton />
    </div>
  );
}

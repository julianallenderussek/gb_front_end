import React from "react";
import { Card } from "@material-ui/core";
import Student from "./Student";
import College from "./College";

export default function App() {
  return (
    <div>
        <Student name="Rick Rude" number="1111"  enrolled={[1,2,3]} />
        <Student name="Shawn Micheals" number="2222"  enrolled={[1,2,3]} />
        <Student name="Bret Hart" number="3333"  enrolled={[1,2,3]} />
        <College name="George Brown" location="Casa Loma" />
    </div>
  )
}

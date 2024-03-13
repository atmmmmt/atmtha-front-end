import React from "react";
import { ring2 } from "ldrs";
ring2.register();
export default function Loading(props) {
  return (
    <l-ring-2
      size={props.size || "18"}
      stroke="2"
      stroke-length="0.30"
      bg-opacity="0.1"
      speed="1.0"
      color={props.color || "white"}
    ></l-ring-2>
  );
}

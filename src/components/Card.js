import React from "react";

import { useSelector } from "react-redux";

export default function Card() {
  const postList = useSelector((store) => store);
  console.log(postList);
  return (
    <>
      <div></div>
    </>
  );
}

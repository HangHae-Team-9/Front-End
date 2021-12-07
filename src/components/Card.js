import React, { useState } from "react";

// import axios from "axios";

import { _loadPostView } from "../modules/postView";

import { useSelector } from "react-redux";

export default function Card() {
  React.useEffect(() => {
    _loadPostView();
  }, []);

  const postList = useSelector((store) => store.postView.list);
  console.log(postList);

  const [post, setPost] = useState([]);

  return (
    <>
      <div></div>
    </>
  );
}

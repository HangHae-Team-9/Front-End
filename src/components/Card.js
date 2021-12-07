import React, { useState } from "react";

// import axios from "axios";

import { _loadPostView } from "../modules/postView";

import { useSelector } from "react-redux";

export default function Card() {
  React.useEffect(() => {
    // const url = "http://15.165.160.58/api/user/main";
    // axios
    //   .get(url)
    //   .then(function (response) {
    //     setPost(response.data);
    //     console.log("성공");
    //   })
    //   .catch(function (error) {
    //     console.log("실패");
    //   });
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

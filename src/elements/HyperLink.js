import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HyperLink({ props }) {
  console.log(props);
  return (
    <>
      <Link to="./login"></Link>
    </>
  );
}

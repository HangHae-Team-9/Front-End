import styled from "styled-components";

export default function Textarea({ children, ...styles }) {
  return (
    <>
      <TextArea {...styles} onChange={styles._onChange} value={styles._value}>
        {children}
      </TextArea>
    </>
  );
}

const TextArea = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

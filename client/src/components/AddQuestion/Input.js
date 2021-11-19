import styled from "styled-components";
export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  background: #222222;
  box-shadow: 0 2px 4px 0 #3700B3;
  border-radius: 2rem;
  width: 800px;
  height: 3rem;
  padding: 1rem;
  margin-left: 2rem;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
`;
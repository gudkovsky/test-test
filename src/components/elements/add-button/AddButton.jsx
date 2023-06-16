import styled from "styled-components";

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: 44px;
  height: 44px;
  border: 2px solid ${(props) => props.theme.bluePrimary};
  border-radius: 4px;
  font-size: 22px;
  line-height: 22px;
  padding: 0;
  background-color: ${(props) => props.theme.whitePrimary};
  color: ${(props) => props.theme.bluePrimary};
  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.bluePrimary};
    color: ${(props) => props.theme.whitePrimary};
  }

  &:active {
    opacity: 80%;
  }
`;

export default AddButton;

import styled from "styled-components";
// import { Link } from "react-router-dom";

// const StyledButton = styled(Link)`
const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;

  border: 1px solid ${(props) => props.theme.bluePrimary};
  border-radius: 4px;

  cursor: pointer;
  transition: 0.3s;
  text-decoration: none;

  background-color: ${(props) => props.$next ? props.theme.bluePrimary : props.theme.whitePrimary};
  color: ${(props) => props.$next ? props.theme.whitePrimary : props.theme.bluePrimary};

  &:hover {
    opacity: 90%;
  }

  &:active {
    opacity: 80%;
  }
`;

export default StyledButton;

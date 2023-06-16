import styled from "styled-components";
import error from '../../../assets/error.png'

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 20;
  top: 20%;
  left: calc(50% - (460px / 2));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 320px;
  width: 460px;
  background-color: white;
  padding: 32px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  background-image: url(${error});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

export const ExitSpan = styled.span`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  color: #B3B3B3;
  background-color: #02020214;
  font-size: 22px;
  line-height: 22px;  
  border-radius: 50%;
  transform: rotate(45deg)
`

export const Title = styled.p`
   flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #333333; 
  margin: 0;
  padding: 0;
`;


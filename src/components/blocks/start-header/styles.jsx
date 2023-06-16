import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  column-gap: 24px;
  border-bottom: 1px solid ${(props) => props.theme.grayBorder};
  padding-bottom: 24px;
`

export const Userpic = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  line-height: 52px;
  color: ${(props) => props.theme.blackPrimary};
  border-radius: 50%;
  background-color: #D5E4F7;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`

export const NameWrapper = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: ${(props) => props.theme.blackPrimary};
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  column-gap: 16px;
`

export const Item = styled.li`
    color: ${(props) => props.theme.bluePrimary};
`

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  column-gap: 8px;
  font-weight: 400;
  transition: 0.5s;

  & img {
    align-self: center;
  }

  &:visited {
    color: ${(props) => props.theme.bluePrimary};
    font-weight: 400;
  }

  &:hover {
    opacity: 70%;
  }
`

// MAIN

export const Main = styled.main`
  display: flex;
  flex-direction: column; 
  row-gap: 24px;
  padding-top: 24px;
`
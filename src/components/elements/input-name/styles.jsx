import styled from 'styled-components'

export const Span = styled.span`
  font-family: 'SB Sans Interface', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.blackPrimary};
`
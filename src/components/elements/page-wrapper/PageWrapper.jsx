import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  min-height: 700px;
  width: 65%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 24px;
  background-color: ${(props) => props.theme.whitePrimary};
`
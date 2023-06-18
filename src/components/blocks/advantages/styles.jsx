import styled from 'styled-components'

export const AdvantagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-width: 100%;
  margin-bottom: 24px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 18px;
  max-width: 350px;
`

export const Delete = styled.button`
  display: inline-flex;
  width: 15px;
  height: 15px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
`
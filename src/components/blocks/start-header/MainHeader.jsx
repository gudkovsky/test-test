import React from 'react'
import { Header as StyledHeader, Userpic, TextWrapper, NameWrapper, List, Item, Link} from './styles.jsx'
import folder from '../../../assets/folder.png'

export default function MainHeader() {
  return (
      <StyledHeader>
        <Userpic>ИГ</Userpic>
        <TextWrapper>
          <NameWrapper>Илья Гудков</NameWrapper>
          <List>
            <Item>
              <Link href='https://t.me/gudkovsky' target='_blank'>
                <img src={folder} alt='folder icon'></img>
                <span>Telegram</span>
              </Link>
            </Item>
            <Item>
              <Link href='https://github.com/gudkovsky' target='_blank'>
                <img src={folder} alt='folder icon'></img>
                <span>GitHub</span>
              </Link>
            </Item>
            <Item>
              <Link href='../../../assets/Gudkov.Frontend-developer.pdf' download>
                <img src={folder} alt='folder icon'></img>
                <span>Resume</span>
              </Link>
            </Item>
          </List>
        </TextWrapper>
      </StyledHeader>
  )
}

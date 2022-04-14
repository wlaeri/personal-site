import styled from '@emotion/styled'
import React from 'react'

export interface EmojiListProps {
  listItems: Array<{
    /**
     * The emoji to replace the list item bullet with.
     */
    emoji: string
    /**
     * The content to display in in the <li> tag.
     */
    content: React.ReactNode
  }>
}

const List = styled.ul<EmojiListProps>`
  list-style: none;
  padding: 0;
  margin: 0;
  padding-left: 24px;

  ${({ listItems }) =>
    listItems.map((listItem, index) => {
      return `li:nth-child(${index + 1}) {
    margin-top: ${index ? 16 : 0}px;
    list-style: '${listItem.emoji}  ';
    list-style-position: outside;
  }`
    })}
`

/**
 * A component to render an unordered list where the bullets are replaced with emojis.
 */
export const EmojiList = ({ listItems }: EmojiListProps): JSX.Element => (
  <List listItems={listItems}>
    {listItems.map((listItem, index) => (
      <li key={index}>{listItem.content}</li>
    ))}
  </List>
)

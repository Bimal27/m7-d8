import React from 'react'

interface SearchItem {
  id: string | number
  title: string
}

const SearchItem = ({ id, title }: SearchItem): JSX.Element => {
  return <div>{title}</div>
}

export default SearchItem

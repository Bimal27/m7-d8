import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import SearchItem from './SearchItem'

interface GenericObject {
  [key: string]: string
}

interface Song {
  album: GenericObject
  artist: GenericObject
  duration: number
  explicit_content_cover: number
  explicit_content_lyrics: number
  explicit_lyrics: boolean
  id: number
  link: string
  md5_image: string
  preview: string
  rank: number
  readable: boolean
  title: string
  title_short: string
  title_version: string
  type: string
}

const Home = (): JSX.Element => {
  const history = useHistory()
  const [searchText, SetSearchText] = useState<string>('')
  const [songs, setSongs] = useState<Song[]>([])
  const [songDetails, setSongDetails] = useState<Song>()

  const handleSearchType = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetSearchText(e.target.value)
  }

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    axios
      .get(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchText}`,
      )
      .then((res: AxiosResponse) => {
        setSongs(res.data.data)
      })
  }

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input type="text" onChange={handleSearchType} value={searchText} />
        <button type="submit">Search</button>
      </form>
      <div className="Songs">
        {!songDetails &&
          songs.map(({ title, id }: Song) => (
            <div key={id} onClick={() => history.push('/song/2')}>
              <SearchItem title={title} id={id} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home

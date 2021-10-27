import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useLocation } from 'react-router-dom'

interface Song {
  id: number
}

const SongDetails = ({ id }: Song): JSX.Element => {
  const location = useLocation()
  const [song, setSong] = useState({})

  useEffect(() => {
    console.log(location)
    axios
      .get(`https://striveschool-api.herokuapp.com/api/deezer/track/${id}`)
      .then((res: AxiosResponse) => {
        setSong(res.data.data)
      })
  }, [location.search])
  return <div>Song Details here</div>
}

export default SongDetails

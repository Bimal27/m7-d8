import axios, { AxiosResponse } from 'axios'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import SongDetails from './components/SongDetails'
import './App.css'

const App = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/song" component={SongDetails} />
    </Switch>
  )
}

export default App

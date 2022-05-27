import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'use-http';
import { Header } from './components/Header'
import { Routes } from './routes'
import './App.css'

const URL = 'http://localhost:3333';

function App() {
  return (
    <div className="App">
      <Provider url={URL}>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App

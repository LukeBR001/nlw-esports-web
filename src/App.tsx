import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Ads } from './components/Screens/Ads'
import { Home } from './components/Screens/Home'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ads/' element={<Ads />} />
      </Routes>
    </Router>
  )
}

export default App;

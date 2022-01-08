import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Feed from './components/Feed.js'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

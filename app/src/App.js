import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Feed from './components/Feed.js'
import Post from './components/Post.js';
import Userpost from './components/Userpost.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/userpost/:username" element={<Userpost/>}/>
        <Route path="/post:postId" element={<Post/>}/>
        <Route path="/" element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


{/* <Router>
<Routes>
  <Route path= "/"  element = {<Homepage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
  <Route path= "/login"  element = {<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
  <Route path= "/Auth"  element = {<Auth isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
  <Route path= "/Map"  element = {<MapPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
  <Route path= "/AddPost"  element = {<Protected isAuthenticated={isAuthenticated}><AddPost bottleID={bottleID} setBottleID={setBottleID} postID={postID} setPostID={setPostID} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} /></Protected>} />
  <Route path= "/UserPosts"  element = {<Protected isAuthenticated={isAuthenticated}><UserPosts bottleID={bottleID} setBottleID={setBottleID} postID={postID} setPostID={setPostID} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} /></Protected>} />
  <Route path= "/AddBottle"  element = {<AddBottle bottleID={bottleID} setBottleID={setBottleID} postID={postID} setPostID={setPostID} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
  <Route path= "/AddAddress"  element = {<AddAddress bottleID={bottleID} setBottleID={setBottleID} postID={postID} setPostID={setPostID} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
</Routes>
</Router> */}
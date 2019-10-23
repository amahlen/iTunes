
import React, {useState, useEffect} from 'react';//importing React
import axios from 'axios';//importing axios
import './App.css';//importing the css
import 'bootstrap/dist/css/bootstrap.min.css';//importing the bootstrap



const App = () => {//creating a App
  const [posts, setPosts] = useState([]);//creating posts and setposts
  const [name, setName] = useState("");//creating name and setname
  const [type, setType] = useState("");//creating type and settype
  const [song,setSong ] = useState({art:"", artist:"", title:"", genre:"", url:""});//creating song and setsong
  const [favourite, setFavourite] = useState(false);//creating favourite and setfavourite




  const getData = () => {//creating getData
    axios.get(`/search/${name}/${type}`)
    .then(data => setPosts(data.data.results))
    console.log(posts)
  }
  useEffect(() => {
    getData()
  }, [setPosts])


  return(//returning all the elements
 
<div className="App ">
<div className="bodyStructure">
  <div className="container App1">
    <br />
    <div className="row">
      <div className="col-sm">
      
      
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-sm-6">
      <h1>Welcome to iTunes!</h1>
        <input
          class="card-btn1"
          type="text"
          name="name"
          placeholder="Enter search item..."
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="col-sm-6">
        <select
          class="card-btn"
          onChange={e => setType(e.target.value)}
        >
          <option value="movie">Movies</option>
          <option value="song">Songs</option>
          <option value="audiobook">Book</option>
        </select>
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-sm">
        <button class="card-btn" onClick={getData}><span>
          Search</span>
        </button>
      </div>
    </div>
    <br />
    <div>
      {posts.map(post => (
        <div>
          <h2>Search Result</h2>
          <div>
            <div className="row ">
              <div className="col-sm-2">
                <button
                  class="card-btn fa fa-heart " 
                  name="favourite"
                  value={{
                    artworkUrl60: post.artworkUrl60,
                
                    trackName: post.trackName,
                    primaryGenreName: post.primaryGenreName,
                    previewUrl: post.previewUrl
                  }}
                 
                  onChange={f => setSong(f.target.value)}
                  onChange={g => setSong(g.target.value)}
                  onChange={h => setSong(h.target.value)}
                  onChange={i => setSong(i.target.value)}
                  
                >
                  favourite
                </button>
              </div>
              <div className="col-sm-2">
                <img src={post.artworkUrl60} alt="" />
              </div>

              <div className="col-sm-4">
                <li>
                  <b>Author Name</b> : {post.artistName}
                </li>
                <li>
                  <b>Title</b> : <i> {post.trackName}</i>
                </li>
                <li>
                  <b>Genre</b> :<i>{post.primaryGenreName}</i>
                </li>
              </div>
              <div className="col-sm-2">
                <audio controls>
                  <source src={post.previewUrl} type="audio/ogg"></source>
                  <source
                    src={post.previewUrl}
                    type="audio/mpeg"
                  ></source>
                </audio>
              </div>
            </div>
            <br />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
);
};
export default App;//exporting the App function


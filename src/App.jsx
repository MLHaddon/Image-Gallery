import './App.css';
import $ from 'jquery';
import { useState, useEffect } from 'react';
import headerLogo from './static/BAG_LOGO.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if ($) {
      $('nav li').hover(
        function() {
          $('ul', this).stop().slideDown(200);
        },
        function() {
          $('ul', this).stop().slideUp(200);
        }
      )
    }
  }, [$]);

  const handleRequest = e => {
    let randWidth = Math.round(Math.random() * (500 - 100) + 100);
    let randHeight = Math.round(Math.random() * (500 - 100) + 100);
    axios.get(`https://picsum.photos/${randWidth}/${randHeight}`)
      .then(res => {
        setImages(oldImgs => [...oldImgs, res.config.url]);
        console.log(res.config.url);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="App">
      <header>
        <nav className="navbar p-4 d-flex flex-row justify-content-between align-items-center">
          <ul>
            <li><a href="#">|||</a>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Artists</a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </li>
          </ul>
          <img src={headerLogo} alt="Loading..." id="logo" />
        </nav>
      </header>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success" onClick={handleRequest}>Add Image</button>
      </div>
        <div className="w-100 d-flex flex-wrap">
          <div className="container">
            <section id="photos">
            {
              images.map((val, idx) => 
                <img src={val} alt="Loading..." key={idx} />
              )
            }
            </section>
          </div>
        </div>
    </div>
  );
}

export default App;

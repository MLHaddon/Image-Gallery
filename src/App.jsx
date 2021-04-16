import './App.css';
import $ from 'jquery';
import { useEffect } from 'react';
import headerLogo from './static/BAG_LOGO.png';
import 'bootstrap/dist/'

function App() {
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

  return (
    <div className="App">
      <header>
        <nav className="d-flex flex-row justify-content-between">
          <div className="container">
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
            <img src={headerLogo} alt="Loading..." />
          </div>
        </nav>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;

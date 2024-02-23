import React from 'react';
import img from './img.png'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form>
      <div className="div1">
        <img className='img' src={img}></img>
      </div>
      <h3>Blog post published</h3>
      <p>This blog post has been published. Team members will be able to edit this post and republish changes.</p>
      <div className="div1">
        <input type="button" value="Cancel"className="button1" />
        <input type="button" value="Confirm" className="button2" />
      </div>
    </form>
  );
}

export default App;
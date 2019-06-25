import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import vision from './VisionProfileFace.JPG';
import visionHit from './VisionFaceHit.jpg';
import captain from './CaptainProfileFace.JPG';
import captainHit from './CaptainFaceHit.JPG';
import doom from './DoomProfileFace.jpg';
import spider from './SpiderProfileFace.jpeg';
import silver from './SilverProfileFace.jpg';
import no from './soundfx/captaven-069.wav';
import welcomeSnd from './soundfx/captaven-064.wav';
import fzero from './soundfx/F-ZeroTheme.mp3';
import SuperList from './superheroes.json';
import Chart from './Chart.js'


class App extends Component {
  
  /* a question for a meeting.  Is there a way I can bring in images by a NAME type designation from a JSON file 
  and assign it to a state?
  ...for example "vision" is an image imported above. that name is used in my STATE below.  If I could assign the word
  vision to a json file that might make it to where I can automate this.  Because right now it's very crude.
  I'm calling every image individually.  I can't use the economy of a REACTS COMPONENTS this way.   */
state = {  
  facepicture: vision,  /* I was trying here, using the json file, facepicture: {SuperList.superheroes[1].face} 
  basically I was trying to designate the state by TRYING to pull a property from a JSON file that would match an IMPORTED
  image from above.*/
  facepicture2: captain
}

componentDidMount() {//how do I force play it??? again???  read the readme for the Frogger project
    this.welcomeAudio.play();
    setTimeout(
        ()=>{this.backGroundMusic.play()}, 1700
    )
}

//Music and Sound section
welcomeAudio = new Audio(welcomeSnd);
backGroundMusic = new Audio(fzero);
audio = new Audio(no); //why do I have to do this???  To make a constructor function for an audio file in reactjs
//how to recycle this???


changePic=()=> {this.setState({facepicture: visionHit});
//let sound    
this.audio.play();
    setTimeout(                      
        ()=>{this.setState({facepicture: vision})}, 150
    )
};

changePic2=()=> {this.setState({facepicture2: captainHit});
    this.audio.play();
    setTimeout(                      
        ()=>{this.setState({facepicture2: captain})}, 150
    )
};
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Mikey Mikey Mikey's Superheroes</p>
        </header>


{/*  Your heroes are here - somehow turn this into a COMPONENT */}

        <div className= "hero-container">
          <img src= {doom} id="imgcc" width="168" alt="Dooms face"/>   

          <img src= {this.state.facepicture} id="imgcc" width="168" alt="Visions clickable face"
             onClick= {this.changePic}
          />   
           
          <img src= {this.state.facepicture2} id="imgcc" width="168" alt="Captain\'s clickable face"
             onClick= {this.changePic2}
          /> 

         {/* <img src= {SuperList.superheroes[0].face} id="imgcc" height="168" alt="spider-man\'s face"/>    */}
         <img src= {spider} id="imgcc" height="168" alt="spider-man\'s face"/>
          {/* <button className="book-cover" style=
        {{ width: 128, height: 193, background-image:{this.state.facepicture} }}> </button> */}
          
          
          <img src= {silver} id="imgcc" width="168" alt="SS\'s face"/>   
        </div>
        
        <div className= "theRest">
          <p>
            Edit <code>src/App.js</code> and save to reload. Because Mike, this will be your superhero page.

          </p>
          <h1>
            {SuperList.superheroes.map((postDetail, index) => {
              return                <div>
                  <h3>{postDetail.name}</h3>
                  {/* <img src={postDetail.face}/> */}
                </div>  
            })}
          </h1>
          <p>
            {SuperList.superheroes[1].face}
            I didn't know it was going to be that loud.<br/>  This site will be like bookkeeping and netflix.<br/>  There's a bank of heroes  <br/>
            apprently all tags must have a closing slash in reactjs.
          </p>
          <Chart />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    );
  }
}

export default App;

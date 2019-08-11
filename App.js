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
  
  /*
  ...for example "vision" is an image imported above. that name is used in my STATE below.  If I could assign the word
  vision to a json file that might make it to where I can automate this.  Because right now it's very crude.
  I'm calling every image individually.  I can't use the economy of a REACTS COMPONENTS this way.   */
state = {  SuperList: SuperList.superheroes,
  facepicture: "http://www.clipartsuggest.com/images/160/stick-figure-cliff-vision-education-and-school-great-clipart-for-pi7KdP-clipart.jpg",  
  /* I was trying here, using the json file, facepicture: {SuperList.superheroes[1].face} 
  basically I was trying to designate the state by TRYING to pull a property from a JSON file that would match an IMPORTED
  image from above. */
  facepicture2: captain
  /*this won't work because I cannot automate it.  Everytime I add a hero, I have to manually change the states... and 
  then it just gets more messed up from there.  It's best to just load the state with the json file and have the state
  get switched witht he ChangePic function by changing the property that's already in the state rather than changing
  an imported image.  BINGO.*/
  
}



componentDidMount() {//how do I force play it??? again???  read the readme for the Frogger project
    this.welcomeAudio.play();
    setTimeout(
        ()=>{this.backGroundMusic.play()}, 1700
    );
  
 
}


//Music and Sound section
welcomeAudio = new Audio(welcomeSnd);
backGroundMusic = new Audio(fzero);
audio = new Audio(no); //why do I have to do this???  To make a constructor function for an audio file in reactjs
//how to recycle this???
/*-------ATTEMPT AT ADDING MUSIC-----  need to change 'musicOn' as a state I think, and not sure if I can use the If Keypress here.
Also  





// Music Settings and Toggling Function
toggleMusic=()=> {
  backGroundMusic.volume = 0.15;
  backGroundMusic.loop = true;
  if (musicOn == false) {
      setTimeout(() => {
          backGroundMusic.play();
          musicOn = true;
      }, 1000);
  } else {
      backGroundMusic.pause();
      musicOn = false;
  };
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method.  You don't need to modify this. (added 'music').
document.addEventListener('keydown', (e)=> {
  var allowedKeys = {
      // 37: 'left',
      // 38: 'up',
      // 39: 'right',
      // 40: 'down',
      77: 'music'
  };  
  player.handleInput(allowedKeys[e.keyCode]);  ****NOT SURE WHAT TO DO WITH THIS****
});

if (keyPress == 'music') {
  toggleMusic();
};

*/
// function poop () {
//   setTimeout(                      
//     ()=>{evt.target.src = this.SuperL[1].imgFaceNorm}, 200
// )
// }


changePic=({target})=> {

 {target.src = this.state.SuperList[1].imgFaceHit};
                //let sound    
                this.audio.play();

    //  I'm thinking to just have this one function instead of multiple, have the id= SuperList[x] and have that inserted in for every hero
    //OR...  assign the Object of the hero to a variable upon the click, individualized by associated with the img id... 
    // i.e.  let superObject = this.state.SuperList[this.id].... I guess....  then you can use that variable universally within the function.
setTimeout(
  ()=> {target.src = this.state.SuperList[1].imgFaceNorm},200);
};
// setTimeout (function(x) {x.target.src = superObject.imgFaceNorm},300);

// let bindtoPC = (
//   function(evt.target.src) {evt.target.src= this.imgFaceNorm}
// ).bind(superObject);

// setTimeout (
//   bindtoPC
// ,2000);



// console.log(bindtoPC)
// //  setTimeout (bindtoPC(), 200)









//---------------------------------------------------------------------------------------------------------------------

// changePic=(evt)=> {
//   evt.target.src = this.state.blablaIMG.newImageName;
//   let x = this.state.blablaIMG;
//     setTimeout(                      
//         ()=>{evt.target.src = x.differentImageName}, 200
//     )
// };
// changePic = ()=> {   //you only have to put the states in the CURLYBRACES when in the JSX!!!
//   let x = this.state.SuperList[1].imgFaceNorm;
//   var y = this.state.SuperList[1].imgFaceHit;
//  document.getElementById(this.state.SuperList[1].id).src= y;
//  this.audio.play();
//  setTimeout(
//    ()=> {document.getElementById(2).src= x}, 150
//  )
// };



changePic2 = ()=> { this.setState({facepicture2: captainHit});
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






          <img src= {this.state.SuperList[1].imgFaceNorm} id={this.state.SuperList[1].id} width="168" alt="Visions clickable face"
			onClick= {this.changePic}
           />
 {/* the prob is is I cant put a PROPERTY of a STATE in a function or something else, i can't even assign it to a variable */}








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
          <ul>
            <li>I want to have the superheroes as a slider.</li>
            <li>And possibly have a separate 30% divider </li>
            <li>I have to figure out how to get the heroes as a component with the pictures somehow
              populated by a json file and into states.</li>
          </ul>
            

          
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



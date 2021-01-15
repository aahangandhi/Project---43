var gameState = 0;

class StoryInfo {

  constructor() {
    this.storyInfo = createElement('h2');
    this.unlock = createButton('Unlock')
    //openIMG = loadImage("open.jpg")
    
  }

  display(){

    this.storyInfo.html("You and your crew are stuck in a room. You just have one attempt to unlock and escape. If you fail you are locked forever. The key to the door will unlock only when the CLOCK shows 12:00:00.")
    this.storyInfo.position(displayWidth - 1150,displayHeight - 700);
    this.storyInfo.style('color',rgb(255,255,255))

    this.unlock.position(displayWidth - 1150,displayHeight - 360)
    this.unlock.style('width', '120px');
    this.unlock.style('height', '40px');
    this.unlock.style('background', 'red');

    this.unlock.mousePressed(()=>{
        gameState = 2;
    })

    

    }










  }
  



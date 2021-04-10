class Box{

    constructor(){
    this.box=Bodies.rectangle(400,550,50,100,{isStatic:true})
    this.image=loadImage("dustbin.png")
    World.add(world,this.box)
    
    
    
    }
    
    
    display(){
    imageMode(CENTER)
    fill("red")
    image( this.image,this.box.position.x,this.box.position.y,50,100)
   
    }
    
    }
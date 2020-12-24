class bin{

    constructor(x,y,width,height)
    {
        
           this.x=x;
           this.y=y;
           this.width=width;
           this.height=height;
           this.image=loadImage("dustbingreen.png")
           this.body=Bodies.rectangle(this.x,this.y,width,this.height,{isStatic:true})
           World.add(world,this.body);
              
         }
     display(){
      var pos = this.body.position ;
      imageMode(CENTER);
      image(this.image,900,460,240,240)
      fill("white");
      rect(pos.x,pos.y,this.width,this.height);
     }
 
 };
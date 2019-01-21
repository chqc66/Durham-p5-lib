class Poly{
	constructor(n,bias){
		this.n = n || 100 ;
		this.bias = bias || 0;
	}
	draw(){
	
  // use default blend mode for background
  blendMode(BLEND);
  background(0, 0, 0);
  
  // use additive blend mode to separate color channels
  blendMode(ADD);
  stroke(255, 0, 0);
  drawPoly(1000, 1000);
  
  stroke(0, 255, 0);
  drawPoly(1200, 1500);
  
  stroke(0, 0, 255);
  drawPoly(2000, 1700);
  
  // distort oscillatiors
  warpOsc();
		}
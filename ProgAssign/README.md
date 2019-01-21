##How to use the Poly() class
Poly() is a class that creates a polygon with n vertices that oscillates and warps with respect to the position
of the cursor. When the mouse is clicked, it plays a synth which has frequency dependent on the position of the 
cursor or the bias value. The visual effect of the oscillation is increased by constructing the polygon using 
RGB polygons that oscillate differently.

It's not actually hard, just use the 'new' function to create a variable with parameters(n,bias) and then 
call a draw function on it. For the parameters, n is just the number of vertices of the shape you wnat drawn.
Bias is essentially a multiplier for the multiplier of the synth noise. There really isn't any real reason to 
change it except that it sounds funny if you put in extreme values.

For the index.js file, I just left the parameters to the default values, which is the same as the original
version.
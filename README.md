# Reaction Diffusion Project
This small independent project simulates an oscilating chemical reaction in real time, particularly the B-Z reactions that I find particularly fascinating. I was inspired to create this by a high school chemistry project my sister was working on at the time along with a nonlinear dynamics and chaos course that I took in my undergrad where we studied these interesting and beautiful feats in nature. While this is a relatively simple program, future iterations can have some interesting science and even educational applications. Gathering the materials to build this reaction in person can be a challenge (especially for students learning remotely) and projects like these can give students a more hands on experience without the dangers of real chemicals. I am currently working on an extension of this project that simulates multiple different famous chemical reactions for educational purposes. 

## How it was Created
I decided to use the JavaScript p5 graphics library as a way of displaying this dynamic reaction. The bulk of the code is in the `sketch.js` file. This program essentially models 2 chemical solutions (“a” and “b”) and determines each pixel color based on the concentrations of these chemicals in a particular region. The program iteratively updates by an equation (that I found in my research), creating a real time simulation of the B-Z reaction. 

The majority of the work for this was the preliminary research since my chemistry background is not strong.

Some of the Resources I used are shown below:
  - Book: Steven H. Strogatz,  Nonlinear Dynamics and Chaos with Applications to Physics, Biology, Chemistry, and Engineering
  - https://www.karlsims.com/rd.html 
  - https://www.algosome.com/articles/reaction-diffusion-gray-scott.html 
  - https://discovery.ucl.ac.uk/id/eprint/17241/1/17241.pdf 


## How to Run the Program

An easy way to run this program is by pasting all the code from sketch.js into the online editor: https://editor.p5js.org. However I find this is not ideal for working on larger projects, so I downloaded a Visual Studio Code p5.js extension and run it from there. 

# simple-rpg
Project I started to train a little bit JavaScript OOP

# Demo
Demo can be found here ✨
https://marc.dev/demo/rpg/

# What is this?
A friend of mine who is studying CS told me about a project he's working on in school. A web-based role playing game. I remembered when I was studying, we had a similar project, C++ based. It was tons of fun, and I wanted to do it again, this time web-based.

In the spirit of working more with OOP in JavaScript, I started this little project. I don't know yet where it is going, just playing around here.

# Status
At the moment you can only create a map with 3 different "field" types (road, grass, wall) and walk around in it.

You can walk on the road and the grass, but not on the wall.

When you walk in the grass, there is a 50% chance that a bug attacks you. If this happens, your health decreases by 20%.

Using ES6 classes now. Will use them as modules, when I figure out how.

Made it easier to create maps, using a (X,Y) coordination system to create. This is just to create the map. Inside, it still works the same with north, east, south, west properties, pointing to the next field.
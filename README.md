# simple-rpg
Project I started to train a little bit JavaScript OOP

# Demo
Demo can be found here ✨
https://rpg.marc.dev

# What is this?
A friend of mine who is studying CS told me about a project he's working on in school. A web-based role playing game. I remembered when I was studying, we had a similar project, C++ based. It was tons of fun, and I wanted to do it again, this time web-based.

In the spirit of working more with OOP in JavaScript, I started this little project. I don't know yet where it is going, just playing around here.

# Status
* You can create a map with 4 different "field" types (road, grass, wall, water) and walk around in it.
  * Road: Normal walk
  * Grass: Walk, but 50% risk of getting stung by a bug
  * Wall: Can't walk. Is seen as obstacle
  * Water: Can technically walk on it, but will drown if the player can't swim
* Animated character
* Textured map
* Game over display


# Changelog
## 20/05/2019
* Made it easier to create maps, using a (X,Y) coordination system to create. This is just to create the map. Inside, it still works the same with north, east, south, west properties, pointing to the next field.
* Huge thanks to [@dacostafilipe](https://twitter.com/dacostafilipe) for helping my out with the ES6 rewrite and Webpack setup.

## 21/05/2019
* Added now canvas graphics and arrow key control.
* Added water class. If the player can't swim (default), he'll drown. Later on, I will add that he can learn how to swim.
* Created an abstraction *Hazard* which has properties such as *damage* and *probability*. Can be added more functionality later. Used as such: `bug.hurt(player);`

## 22/05/2019
* Now the map moves around instead of the player (user can only see a portion of the map)
* Added Pokemon Gamboy character (Ash) which turns in the direction he walks to.
* Added textures of floor elements (road, grass, water)
* Added game over screen

## 23/05/2019
* Extended map to 5x5
* Made a centralized place where all UI controlling takes place (UIController, duh)
* Simplified hazards (no sub-classes anymore)
* Added health display

# Install

Install needed packages:

```
yarn install
```

Compile JS for production

```
yarn run build
```

Compile JS for development with watch function

```
yarn run build-dev
```
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
  * Grass: Walk, but risk of getting stung by a bug
  * Wall: Can't walk. Is seen as obstacle
  * Water: Can technically walk on it, but will drown if the player can't swim
* On every field can be attached an item (something the player can pick up and use) and a body (which cannot be taken moved from the field)
* Actions that have Effects, which affect anything that extends the Affectable class AND is affectable by that action
* Animated character
* Textured map
* Game over display

# How it works

** *This section is still under construction* **

## Maps and Fields

The map is an object which is made up of fields. It is only used to create a map out of the fields. Because the fields are independent from the map.

Each field has a north, east, south, west. Each of which can contain another field reference. So when a field is added to the map with `addField`, it will check in the matrix if there are neighboring fields that need to be connected to the N/E/S/W directions.

## Player

The player moved through the map, or better said the fields. When he moves (`move(direction)`) into a direction, all he does is update his `currentField` to the direction in which he moved.

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
* Added backpack functionality (only liquids for now). Can be invoked with the space key.

## 10/06/2019
* Fixed a display error in Safari
* Introducing actions (drink, smell, etc.) that can have effects (change of property). This is kept very abstract. Every object that inherits Affectable can be affected by an action.
* Making it easier to create objects that can have an effect on other objects
* Extended map to 10x10 so I can lay out a story
* Added a tree class (which will be able to cut down with a tool)

## 11/06/2019
* Added new graphics
* Can now add items to field for the player to pick up

## 12/06/2019
* Added "Body" that can be attached to a field (e.g. Tree). Different from Item is: It can't be picked up.
* Moved tree from Item to Body

## 15/06/2019
* Removed Hazards, replaced them with Actions
* Added pick-up for items that are attached to a field

## 16/06/2019
* Added Axe
* Able to chop down trees with Axe

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
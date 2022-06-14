import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"

import { useState } from 'react';

import { createDataSet } from "./data/dataset"
import "./App.css"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()



export function App() {
  const [actCat, setCategory] = useState("");
  const [restAct, setRestAct] = useState("");
  const [itemAct, setItemAct] = useState("");
  
  const setActiveCat = (category) => {
    setCategory(category);
  }
  const setActiveRest = (place) => {
    setRestAct(place);
  }
  const setItemRest = (item) => {
    setItemAct(item);
  }
  
  
  
  const currentMenuItems = data.filter((menuItem) => {
    if (menuItem.food_category == actCat && restAct == menuItem.restaurant) {
      return true;
    }
      return false;
  });

  

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {categories.map((category, idx) => (
            <Chip label = {category} key={idx} isActive = {category === actCat} onClick = {() => {setActiveCat(category)}}/>
            
          ))}

          
          
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header tagline = {appInfo.tagline} title = {appInfo.title} description ={appInfo.description}/>
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{restaurants.map((place, idx) => (
            <Chip label = {place} key={idx} isActive = {place === restAct} onClick = {() => {setActiveRest(place)}}/>
            /*  <p categories={place} key={place}>{place}</p>*/
          ))}</div>
        </div>

        {/* INSTRUCTIONS GO HERE appInfo.instructions.start */}
        
        <Instructions instructions = {appInfo.instructions.start}/>

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item, idx) => (
              <Chip label = {item.item_name} key={idx} isActive = {item.item_name === itemAct.item_name} onClick = {() => {setItemRest(item)}}/>
            ))}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {/* YOUR CODE HERE */}
            <NutritionalLabel  item={itemAct}/>
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App

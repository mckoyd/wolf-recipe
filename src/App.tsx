import React from "react";
import Omelette from "./assets/images/image-omelette.jpeg";
import "./App.css";
import { IngredientListItem, SpanListItem } from "./ListItems";

const constants = {
  TITLE: "Simple Omelette Recipe",
  ABOUT:
    "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
  PREP_TIME: "Preparation time",
  INGREDIENTS: "Ingredients",
  INSTRUCTIONS: "Instructions",
  NUTRITION: "Nutrition",
};

const App: React.FC = () => {
  return (
    <main className="app">
      <img className="omelette-img" src={Omelette} alt="omelette" />
      <section className="recipe-section">
        <h1 className="recipe-title">{constants.TITLE}</h1>
        <p className="recipe-about">{constants.ABOUT}</p>
        <section className="prep-time-container">
          <h3 className="prep-time-title">{constants.PREP_TIME}</h3>
          <ul className="prep-list">
            <SpanListItem
              catTitle="Total:"
              catText="Approximately 10 minutes"
              textClassName="prep-text"
              marker="prep-cat"
              item="prep-item"
            />
            <SpanListItem
              catTitle="Preparation:"
              catText="5 minutes"
              textClassName="prep-text"
              marker="prep-cat"
              item="prep-item"
            />
            <SpanListItem
              catTitle="Cooking:"
              catText="5 minutes"
              textClassName="prep-text"
              marker="prep-cat"
              item="prep-item"
            />
          </ul>
        </section>
        <section className="ingredients-container">
          <h3 className="brown-title">{constants.INGREDIENTS}</h3>
          <ul className="ingredients-list">
            <IngredientListItem ingredientText=" 2-3 large eggs" />
            <IngredientListItem ingredientText=" Salt, to taste" />
            <IngredientListItem ingredientText=" Pepper, to taste" />
            <IngredientListItem ingredientText=" 1 tablespoon of butter or oil" />
            <IngredientListItem ingredientText=" Optional fillings: cheese, diced vegetables, cooked meats, herbs" />
          </ul>
        </section>
      </section>
      <hr className="divider" />
      <section className="instructions-container">
        <h3 className="brown-title">{constants.INSTRUCTIONS}</h3>
        <ol className="instruction-list">
          <SpanListItem
            catTitle="Beat the eggs: "
            catText="In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
  You can add a tablespoon of water or milk for a fluffier texture."
            textClassName="instruction-text"
            marker="instruction-cat"
            item="instruction-item"
          />
          <SpanListItem
            catTitle="Heat the pan: "
            catText="Place a non-stick frying pan over medium heat and add butter or oil."
            textClassName="instruction-text"
            marker="instruction-cat"
            item="instruction-item"
          />
          <SpanListItem
            catTitle="Cook the omelette: "
            catText="Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
            the eggs evenly coat the surface."
            textClassName="instruction-text"
            marker="instruction-cat"
            item="instruction-item"
          />
          <SpanListItem
            catTitle="Add fillings (optional): "
            catText="When the eggs begin to set at the edges but are still slightly runny in the 
            middle, sprinkle your chosen fillings over one half of the omelette."
            textClassName="instruction-text"
            marker="instruction-cat"
            item="instruction-item"
          />
          <SpanListItem
            catTitle="Fold and serve: "
            catText="As the omelette continues to cook, carefully lift one edge and fold it over the 
            fillings. Let it cook for another minute, then slide it onto a plate."
            textClassName="instruction-text"
            marker="instruction-cat"
            item="instruction-item"
          />
          <SpanListItem
            catTitle="Enjoy: "
            catText="Serve hot, with additional salt and pepper if needed."
            textClassName="instruction-text"
            marker="instruction-cat"
            item="instruction-item"
          />
        </ol>
      </section>
      <hr className="divider" />
      <section className="nutrition-container">
        <h3 className="brown-title">{constants.NUTRITION}</h3>
        <p className="nutrition-about">
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <section className="nutrition-table">
          <div className="nutrition-row">
            <p className="nutrition-left-cell">Calories</p>
            <p className="nutrition-right-cell">277kcal</p>
          </div>
          <div className="nutrition-row">
            <p className="nutrition-left-cell">Carbs</p>
            <p className="nutrition-right-cell">0g</p>
          </div>
          <div className="nutrition-row">
            <p className="nutrition-left-cell">Protein</p>
            <p className="nutrition-right-cell">20g</p>
          </div>
          <div className="nutrition-row last">
            <p className="nutrition-left-cell">Fat</p>
            <p className="nutrition-right-cell">22g</p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default App;

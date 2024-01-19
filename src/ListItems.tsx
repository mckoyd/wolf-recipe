import React from "react";

interface ISpanListItem {
  catTitle: string;
  catText: string;
  textClassName: string;
  marker: string;
  item: string;
}

interface IIngredientListItem {
  ingredientText: string;
}

export const SpanListItem: React.FC<ISpanListItem> = ({
  catTitle,
  catText,
  textClassName,
  marker,
  item,
}) => {
  return (
    <li className={item}>
      <p className={textClassName}>
        <span className={marker}>{catTitle}</span> {catText}
      </p>
    </li>
  );
};

export const IngredientListItem: React.FC<IIngredientListItem> = ({
  ingredientText,
}) => {
  return (
    <li className="ingredient-item">
      <p className="ingredient-text">{ingredientText}</p>
    </li>
  );
};

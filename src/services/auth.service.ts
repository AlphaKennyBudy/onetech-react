import { ProductType } from "../store/types";

const API = "api.spoonacular.com";
const API_KEY = process.env.REACT_APP_API_KEY;
const NUMBER = 30;

type RecipeType = {
  id: number;
  title: string;
  image: string;
  pricePerServing: number;
};

async function getFood() {
  return fetch(
    `https://${API}/recipes/random?number=${NUMBER}&apiKey=${API_KEY}`
  )
    .then((data) => data.json())
    .then((res) =>
      res.recipes.map(
        ({ id, title, image, pricePerServing }: RecipeType): ProductType => {
          return {
            id,
            name: title,
            price: parseFloat(pricePerServing.toFixed(2)),
            image,
            quantity: 0,
            ordered: false,
          };
        }
      )
    );
}

export default getFood;

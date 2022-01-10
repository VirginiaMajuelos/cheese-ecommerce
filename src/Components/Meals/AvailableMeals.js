import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Queso Manchego",
    description:
      "Es un queso elaborado con leche de oveja de la raza manchega.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Torta del Casar",
    description:
      "Elaborado a base de leche cruda de oveja, con cuajo vegetal y sal.",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Ideazabal",
    description:
      "Elaborado con leche de oveja Latxa y Carranzana y sin pasteurizar.",
    price: 19.99,
  },
  {
    id: "m4",
    name: "Cabrales",
    description:
      "Elaborado artesanalmente con varias clases de leche: vaca, oveja y cabra",
    price: 22.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <li>
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    </li>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

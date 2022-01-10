import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Quesos artesanos, a tu mesa</h2>
      <p>
        Elige tu queso favorito de nuestra selección de quesos de la peninsula y
        disfrutalos en una deliciosa comida o cena en casa.
      </p>
      <p>
        Todos nuestros quesos son preparados con cariño con los mejores
        artesanos y con los procesos de mayor calidad para ti. Una experiencia
        única en tu paladar!
      </p>
    </section>
  );
};

export default MealsSummary;

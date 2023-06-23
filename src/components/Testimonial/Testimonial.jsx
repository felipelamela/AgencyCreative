import React from "react";
import styles from "./Testimonial.module.css";
import imageTesti from "../../assets/img/Ellipse57.png";
import CardTestimonial from "../GlobalComponents/CardTestimonial/CardTestimonial";

const Testimonial = () => {
  return (
    <section className={styles.containerTesti}>
      <h2>Testimonial</h2>
      <h3 >Peaple Talk about us</h3>
      <div className={styles.containerCardsTesti}>
        <CardTestimonial
          img={imageTesti}
          prof="Creative Manager"
          name="Angel Rose"
          descri="There are many variations passages of Lorem Ipsum majority some by words which don't look . "
        />
        <CardTestimonial
          img={imageTesti}
          prof="Creative Manager"
          name="Angel Rose"
          descri="There are many variations passages of Lorem Ipsum majority some by words which don't look . "
        />
        <CardTestimonial
          img={imageTesti}
          prof="Creative Manager"
          name="Angel Rose"
          descri="There are many variations passages of Lorem Ipsum majority some by words which don't look . "
        />
      </div>
    </section>
  );
};

export default Testimonial;

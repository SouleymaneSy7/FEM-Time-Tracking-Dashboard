<template>
  <div class="card-container">
    <section class="card" v-for="card in cardDetails" :key="card.id">
      <article class="card__img">
        <img :src="card.img" alt="Icons" />
      </article>

      <article class="card__main">
        <div class="card-main__top">
          <h2 class="card__title">{{ card.title }}</h2>

          <a href="#">
            <img src="../assets/icon-ellipsis.svg" alt="Ellipsis Icon" />
          </a>
        </div>
        <div class="card-main__bottom">
          <h3 class="card__current-number">
            {{ card.timeframes.weekly.current }}hrs
          </h3>

          <p class="card__previous-number">
            Last Week - {{ card.timeframes.weekly.previous }}hrs
          </p>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
// Imports
import { ref } from "vue";
import WorkImg from "../assets/icon-work.svg";
import playImg from "../assets/icon-play.svg";
import studyImg from "../assets/icon-study.svg";
import exerciseImg from "../assets/icon-exercise.svg";
import socialImg from "../assets/icon-social.svg";
import selfCareImg from "../assets/icon-self-care.svg";

// Variables
const cardDetails = ref([
  {
    id: 0,
    title: "Work",
    img: WorkImg,
    timeframes: {
      weekly: {
        current: 32,
        previous: 36,
      },
    },
  },

  {
    id: 1,
    title: "Play",
    img: playImg,
    timeframes: {
      weekly: {
        current: 10,
        previous: 8,
      },
    },
  },

  {
    id: 2,
    title: "Study",
    img: studyImg,
    timeframes: {
      weekly: {
        current: 4,
        previous: 7,
      },
    },
  },
  {
    id: 3,
    title: "Exercise",
    img: exerciseImg,
    timeframes: {
      weekly: {
        current: 4,
        previous: 5,
      },
    },
  },

  {
    id: 4,
    title: "Social",
    img: socialImg,
    timeframes: {
      weekly: {
        current: 5,
        previous: 10,
      },
    },
  },

  {
    id: 5,
    title: "Self Care",
    img: selfCareImg,
    timeframes: {
      weekly: {
        current: 2,
        previous: 2,
      },
    },
  },
]);
</script>

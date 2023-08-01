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
            {{ card.timeframes.monthly.current }}hrs
          </h3>

          <p class="card__previous-number">
            Last Month - {{ card.timeframes.monthly.previous }}hrs
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
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },

  {
    id: 1,
    title: "Play",
    img: playImg,
    timeframes: {
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },

  {
    id: 2,
    title: "Study",
    img: studyImg,
    timeframes: {
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    id: 3,
    title: "Exercise",
    img: exerciseImg,
    timeframes: {
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },

  {
    id: 4,
    title: "Social",
    img: socialImg,
    timeframes: {
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },

  {
    id: 5,
    title: "Self Care",
    img: selfCareImg,
    timeframes: {
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
]);
</script>

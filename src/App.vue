<template>
  <main class="main-container">
    <Header />
    <RouterView v-slot="{ Component }">
      <Transition name="page-transition" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

  <footer class="attribution">
    <p>
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >
    </p>

    <p>
      Coded <span>&hearts;</span> by
      <a href="https://github.com/SouleymaneSy7" target="_blank"
        >Souleymane Sy</a
      >
    </p>
  </footer>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<style lang="scss">
#app {
  width: min(100%, var(--max-width));
}

.page-transition-enter-active,
.page-transition-leave-active {
  transition: all 400ms ease;
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
  transform: translateY(3.75rem);
}

.main-container {
  display: flex;
  flex-direction: column;
  gap: var(--fs-20);
}

.attribution {
  text-align: center;
  margin-block-start: 2rem;

  & p {
    font-size: 1rem;
    color: var(--desaturated-blue);

    & span {
      font-size: 1.75rem;
      color: var(--light-orange);
    }
  }

  & a {
    font-size: 1.25rem;
    color: var(--light-orange);

    transition: 150ms ease-out;

    &:where(:hover, :focus-within) {
      text-decoration: underline;
    }
  }
}

@media only screen and (min-width: 68.75em) {
  .main-container {
    width: min(100%, var(--max-width));
    margin-inline: auto;

    display: flex;
    flex-direction: row;
  }

  .attribution {
    position: absolute;
    bottom: 0.625rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

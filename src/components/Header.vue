<template>
  <header class="header-container">
    <section class="profile-container">
      <article class="profile__img">
        <img src="../assets/image-jeremy.png" alt="Man Profile Picture" />
      </article>
      <article class="profile__textbox">
        <p class="profile__report">Report for</p>
        <h1 class="profile__name">Jeremy Robson</h1>
      </article>
    </section>

    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/" class="link">Daily</router-link>
        </li>
        <li>
          <router-link to="/Weekly" class="link">Weekly</router-link>
        </li>

        <li>
          <router-link to="/Monthly" class="link">Monthly</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

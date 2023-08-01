import { createRouter, createWebHistory } from "vue-router";
import DailyView from "../views/DailyView.vue";
import WeeklyView from "../views/WeeklyView.vue";
import MonthlyView from "../views/MonthlyView.vue";

const routes = [
  {
    path: "/",
    name: "Daily",
    component: DailyView,
  },
  {
    path: "/Weekly",
    name: "Weekly",
    component: WeeklyView,
  },
  {
    path: "/Monthly",
    name: "Monthly",
    component: MonthlyView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

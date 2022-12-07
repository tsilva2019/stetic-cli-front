import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import RTL from "../views/Rtl.vue";
import Notifications from "../views/Notifications.vue";
import Profile from "../views/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Guard from "../services/middleware"

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: Guard.auth
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    beforeEnter: Guard.auth
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
    beforeEnter: Guard.auth
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
    beforeEnter: Guard.auth
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
    beforeEnter: Guard.auth
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: Guard.auth
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
    beforeEnter: Guard.auth
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;

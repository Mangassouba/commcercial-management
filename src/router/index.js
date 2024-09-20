import { createRouter, createWebHistory } from "vue-router";
import Customer from "../components/customers/CustomerComponent.vue";
import Product from "../components/products/ProductComponent.vue";
import Order from "../components/orders/ListOrder.vue";
import AjoutOrder from "../components/orders/AjoutOrder.vue";
import EditOrder from "../components/orders/editOrder.vue";
import ShowOrder from "../components/orders/ShowOrder.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "customer",
      component: Customer,
    },
    {
      path: "/product",
      name: "product",
      component: Product,
    },
    {
      path: "/order",
      name: "order",
      component: Order,
    },
    {
      path: "/create",
      name: "create",
      component: AjoutOrder,
    },
    {
      path: "/create/id",
      name: "edit",
      component: EditOrder,
    },
    {
      path: "/view/id",
      name: "view",
      component: ShowOrder,
    },
  ],
});

export default router;

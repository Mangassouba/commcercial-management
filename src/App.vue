<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const activeRoute = ref("customer");

const setActiveRoute = (route) => {
  activeRoute.value = route;
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse p-2 container" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active mx-2">
          <router-link
            class="active-link"
            :class="{ focused: activeRoute === 'customer' }"
            to="/"
            @click="setActiveRoute('customer')"
          >
            <i class="fa-solid fa-users"></i>
            Customers
          </router-link>
        </li>
        <li class="nav-item mx-2">
          <router-link
            class="active-link"
            :class="{ focused: activeRoute === 'product' }"
            to="/product"
            @click="setActiveRoute('product')"
          >
            <i class="fa-solid fa-box-open"></i>
            Products
          </router-link>
        </li>
        <li class="nav-item mx-2">
          <router-link
            class="active-link"
            :class="{ focused: activeRoute === 'order' }"
            to="/order"
            @click="setActiveRoute('order')"
          >
            <i class="fa-solid fa-cart-arrow-down"></i>
            Orders
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
.active-link {
  text-decoration: none;
  font-weight: bold;
  color: darkgrey;
}

.active-link.focused {
  font-weight: bold;
  color: #007bff;
}
</style>

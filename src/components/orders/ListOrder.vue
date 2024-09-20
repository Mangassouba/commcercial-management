<template>
  <div class="container mt-3">
    <h1>List of Orders</h1>
    <div>
      <!-- Button trigger modal -->
      <div class="btn-right-action mt-4 mb-4 d-flex justify-content-end">
        <RouterLink
          type="button"
          class="btn btn-primary"
          :to="{ name: 'create' }"
        >
          Add New Order
        </RouterLink>
      </div>
    </div>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Delivery Address</th>
            <th scope="col">Track Number</th>
            <th scope="col">Status</th>
            <th scope="col" class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <td>{{ order.date }}</td>
            <td>{{ order.customer }}</td>
            <td>{{ order.deliveryAddress }}</td>
            <td>{{ order.trackNumber }}</td>
            <td>{{ order.status }}</td>
            <td class="text-center">
              <RouterLink
                class="btn btn-primar eye mx-2"
                :to="{name:'view'}"
              >
                <i class="fa-regular fa-eye"></i>
              </RouterLink>
              <RouterLink
                class="btn btn-primar square mx-2" :to="{name : 'edit'}"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </RouterLink>
              <button
                class="btn btn-primar trash mx-2"
                @click="deleteOrder(index)"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
const orders = ref([
{
    date: "2024-09-15",
    customer: "John Doe",
    deliveryAddress: "123 Main St, Springfield",
    trackNumber: "TRK123456789",
    status: "Processing"
  },
  {
    date: "2024-09-16",
    customer: "Jane Smith",
    deliveryAddress: "456 Elm St, Shelbyville",
    trackNumber: "TRK987654321",
    status: "Shipped"
  },
  {
    date: "2024-09-17",
    customer: "Robert Johnson",
    deliveryAddress: "789 Oak St, Capital City",
    trackNumber: "TRK456789123",
    status: "Delivered"
  },
  {
    date: "2024-09-18",
    customer: "Emily Davis",
    deliveryAddress: "321 Pine St, Ogdenville",
    trackNumber: "TRK321654987",
    status: "Processing"
  }
]);
function deleteOrder(index) {
  if (window.confirm("Are you sure you want to delete this order?")) {
    orders.value.splice(index, 1);
  }
}
</script>

<style scoped>
.eye {
  color: rgba(0, 140, 255, 0.759);
}
.square {
  color: rgb(255, 204, 0);
}
.trash {
  color: red;
}
</style>

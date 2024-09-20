<template>
    <div class="container mt-3">
        <h1>Show order</h1>
      <form class="row g-3">
        <div class="btn-right-action mt-4 mb-4 d-flex justify-content-end">
          <RouterLink
            type="button"
            class="btn btn-secondary mx-4"
            :to="{ name: 'order' }"
          >
            Return to Order
          </RouterLink>
        </div>
        <div class="col-md-6">
          <label for="date" class="form-label">Date</label>
          <input type="date" class="form-control" id="date" disabled/>
        </div>
        <div class="col-md-6">
          <label for="address" class="form-label">Delivery Address</label>
          <input type="text" class="form-control" id="address" disabled/>
        </div>
        <div class="col-md-6">
          <label for="name" class="form-label">Customer Name</label>
          <input type="text" class="form-control" id="name" disabled/>
        </div>
        <div class="col-md-6">
          <label for="trackNumer" class="form-label">Track Number</label>
          <input type="text" class="form-control" id="trackNumer" disabled/>
        </div>
        <div class="col-md-6 offset-6">
          <label for="status" class="form-label">Order Status</label>
          <select class="form-select" aria-label="Default select example" disabled>
            <option selected></option>
            <option value="1">Processing</option>
            <option value="2">Shipped</option>
            <option value="3">Delivered</option>
          </select>
        </div>
      </form>
      <!-- </div> -->
      <RouterView />
  
      <div class="row mt-5 mx-1">
        <h2 class="mx-0">Order Details</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in orderDetail" :key="index">
              <td>
                <select
                  class="form-select"
                  v-model="product"
                  aria-label="Default select example"
                  disabled
                >
                  <option selected>{{ detail.product }}</option>
                  <option value="1">Processing</option>
                  <option value="2">Shipped</option>
                  <option value="3">Delivered</option>
                </select>
              </td>
              <td>
                <input type="number" class="form-control" v-model="quantity" disabled/>
              </td>
              <td>
                <input type="number" class="form-control" v-model="price" disabled/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { RouterLink, RouterView } from "vue-router";
  import { ref } from "vue";
  const product = ref("");
  const quantity = ref(1);
  const price = ref(0);
  
  const orderDetail = ref([{ product: "Product 1", quantity: 2, price: 25.0 }]);
  
  function addDetail() {
    orderDetail.value.push({
      product: product.value,
      quantity: quantity.value,
      price: price.value,
    });
  }
  
  
  </script>
  
  <style scoped></style>
  
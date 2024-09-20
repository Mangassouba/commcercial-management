<template>
  <div class="container mt-3">
    <h1>List of Customers</h1>
    <div>
      <!-- Button trigger modal -->
      <div class="btn-right-action mt-4 mb-4 d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add New Customer
        </button>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="false"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Create new customer
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form @submit.prevent="addCustomer">
              <div class="modal-body">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="name"
                  />
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">Address</label>
                  <textarea
                    class="form-control"
                    id="address"
                    v-model="address"
                    rows="3"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    v-model="phone"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit button"
                  class="btn btn-primary"
                >
                  confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col" class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, index) in customers" :key="index">
            <td>{{ customer.name }}</td>
            <td>{{ customer.address }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone }}</td>
            <td class="text-center">
              <button
                class="btn btn-primar eye mx-2"
                data-bs-toggle="modal"
                data-bs-target="#viewModal"
                @click="viewCustomer(index)"
              >
                <i class="fa-regular fa-eye"></i>
              </button>
              <button
                class="btn btn-primar square mx-2"
                data-bs-toggle="modal"
                data-bs-target="#updateModal"
                @click="editCustomer(index)"
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                class="btn btn-primar trash mx-2"
                @click="deleteCustomer(index)"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="viewModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">View customer</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="name"
                    disabled
                  />
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">Address</label>
                  <textarea
                    class="form-control"
                    id="address"
                    v-model="address"
                    rows="3"
                    disabled
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                    disabled
                  />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    v-model="phone"
                    disabled
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="updateModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit customer</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateCustomer">
              <div class="modal-body">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="name"
                  />
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">Address</label>
                  <textarea
                    class="form-control"
                    id="address"
                    v-model="address"
                    rows="3"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    v-model="phone"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const customers = ref([
  { name: "med", address: "pk8", email: "med@gmail.com", phone: "47896510" },
  {
    name: "medou",
    address: "pk7",
    email: "medou@gmail.com",
    phone: "45212363",
  },
  { name: "aly", address: "basra", email: "aly@gmail.com", phone: "32365410" },
  {
    name: "moussa",
    address: "tvz",
    email: "moussa@gmail.com",
    phone: "22145630",
  },
]);

const name = ref("");
const address = ref("");
const email = ref("");
const phone = ref("");

function addCustomer() {
  customers.value.push({
    name: name.value,
    address: address.value,
    email: email.value,
    phone: phone.value,
  });
  name.value = "";
  address.value = "";
  email.value = "";
  phone.value = "";
}
function deleteCustomer(index) {
  if (window.confirm("Êtes-vous sûr de vouloir supprimer ce client ?")) {
    customers.value.splice(index, 1);
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

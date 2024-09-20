<template>
  <div class="container mt-3">
    <h1>List of Products</h1>
    <div>
      <!-- Button trigger modal -->
      <div class="btn-right-action mt-4 mb-4 d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add New Product
        </button>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Create New Product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3" @submit.prevent="addProduct">
                <div class="col-md-6">
                  <label for="name" class="form-label">Product name</label>
                  <input type="text" class="form-control" v-model="name" id="name" />
                </div>
                <div class="col-md-6">
                  <label for="category" class="form-label"
                    >Category</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    v-model="category"
                  />
                </div>
                <div class="col-md-6">
                  <label for="prix" class="form-label">Prix</label>
                  <input type="number" class="form-control" id="prix" v-model="prix" placeholder="0" value="0" />
                </div>
                <div class="col-md-6">
                  <label for="stock" class="form-label"
                    >Stock Quantity</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="stock"
                    v-model="stock"
                    value="0"
                    placeholder="0"
                  />
                </div>
                <div class="col-md-6">
                  <label for="barcode" class="form-label">Barcode</label>
                  <input type="text" class="form-control" v-model="barcode" id="barcode" />
                </div>
                <div class="col-md-6">
                  <label for="status" class="form-label"
                    >Status</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="status"
                    v-model="status"
                  />
                </div>
                <div class="col-12">
                  <label for="description" class="form-label">Description</label>
                  <textarea class="form-control" v-model="description" id="description"></textarea>
                </div>
                <div class="col-12 modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">confirm</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Category</th>
            <th scope="col">Barcode</th>
            <th scope="col">Status</th>
            <th scope="col" class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.prix }}</td>
            <td>{{ product.stock }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.barcode }}</td>
            <td>{{ product.status }}</td>
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
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                View Product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3" @submit.prevent="">
                <div class="col-md-6">
                  <label for="name" class="form-label">Product name</label>
                  <input type="text" class="form-control" v-model="name" id="name" disabled/>
                </div>
                <div class="col-md-6">
                  <label for="category" class="form-label"
                    >Category</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    v-model="category"
                    disabled
                  />
                </div>
                <div class="col-md-6">
                  <label for="prix" class="form-label">Prix</label>
                  <input type="number" class="form-control" id="prix" v-model="prix" placeholder="0" value="0" disabled/>
                </div>
                <div class="col-md-6">
                  <label for="stock" class="form-label"
                    >Stock Quantity</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="stock"
                    v-model="stock"
                    value="0"
                    placeholder="0"
                    disabled
                  />
                </div>
                <div class="col-md-6">
                  <label for="barcode" class="form-label">Barcode</label>
                  <input type="text" class="form-control" v-model="barcode" id="barcode" disabled/>
                </div>
                <div class="col-md-6">
                  <label for="status" class="form-label"
                    >Status</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="status"
                    v-model="status"
                    disabled
                  />
                </div>
                <div class="col-12">
                  <label for="description" class="form-label">Description</label>
                  <textarea class="form-control" v-model="description" id="description" disabled></textarea>
                </div>
                <div class="col-12 modal-footer">
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
  </div>


  <div>
    <!-- Modal -->
    <div
        class="modal fade"
        id="updateModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3" @submit.prevent="">
                <div class="col-md-6">
                  <label for="name" class="form-label">Product name</label>
                  <input type="text" class="form-control" v-model="name" id="name" />
                </div>
                <div class="col-md-6">
                  <label for="category" class="form-label"
                    >Category</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    v-model="category"
                  />
                </div>
                <div class="col-md-6">
                  <label for="prix" class="form-label">Prix</label>
                  <input type="number" class="form-control" id="prix" v-model="prix" placeholder="0" value="0" />
                </div>
                <div class="col-md-6">
                  <label for="stock" class="form-label"
                    >Stock Quantity</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="stock"
                    v-model="stock"
                    value="0"
                    placeholder="0"
                  />
                </div>
                <div class="col-md-6">
                  <label for="barcode" class="form-label">Barcode</label>
                  <input type="text" class="form-control" v-model="barcode" id="barcode" />
                </div>
                <div class="col-md-6">
                  <label for="status" class="form-label"
                    >Status</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="status"
                    v-model="status"
                  />
                </div>
                <div class="col-12">
                  <label for="description" class="form-label">Description</label>
                  <textarea class="form-control" v-model="description" id="description"></textarea>
                </div>
                <div class="col-12 modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">confirm</button>
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

const products = ref([
{
    name: "Aspirine",
    description: "Un analgésique soulager les douleurs mineures.",
    prix: "5.00",
    stock: "120",
    category: "Médicaments",
    barcode: "1234567890123",
    status: "Disponible"
  },
  {
    name: "Paracétamol",
    description: "Un médicament pour soulager la douleur.",
    prix: "3.50",
    stock: "200",
    category: "Médicaments",
    barcode: "2345678901234",
    status: "Disponible"
  },
  {
    name: "Ibuprofène",
    description: "Anti-inflammatoire soulager la douleur et l'inflammation.",
    prix: "7.00",
    stock: "150",
    category: "Médicaments",
    barcode: "3456789012345",
    status: "En rupture"
  },
  {
    name: "Vitamines C",
    description: "Complément alimentaire pour le système immunitaire.",
    prix: "10.00",
    stock: "300",
    category: "Suppléments",
    barcode: "4567890123456",
    status: "Disponible"
  }
]);

const name = ref("");
const description = ref("");
const prix = ref("");
const category = ref("");
const stock = ref("");
const barcode = ref("");
const status = ref("");

function addProduct() {
  products.value.push({
    name: name.value,
    description: description.value,
    prix: prix.value,
    stock:stock.value,
    category: category.value,
    barcode: barcode.value,
    status: status.value,
  });
  name.value = "";
  description.value = "";
  prix.value = "";
  stock.value = "";
  category.value = "";
  barcode.value = "";
  status.value = "";
}
function deleteCustomer(index) {
  if (window.confirm("Are you sure you want to delete this product?")) {
    products.value.splice(index, 1);
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

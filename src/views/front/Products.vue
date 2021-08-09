<template>
  <Loading :isLoading="isLoading" />
  <div class="container my-5">
    <div class="row">
      <div class="col-md-3">
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action border-0 border-bottom"
            @click.prevent="selectCategory = item"
            >所有產品</a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action border-0 border-bottom"
            v-for="item in categories"
            :key="item.id"
            @click.prevent="selectCategory = item"
            >{{ item }}</a
          >
        </div>
      </div>
      <div class="col-md-9">
        <ul class="list-unstyled row">
          <li v-for="item in filterProducts" :key="item.id" class="col-md-6 mb-4">
            <a class="productImg" href="" @click.prevent="getProduct(item.id)">
              <div
                style="
                  height: 400px;
                  background-size: cover;
                  background-position: center;
                "
                :style="{ 'background-image': `url(${item.imageUrl})` }"
              ></div>
            </a>
            <div class="d-flex justify-content-between align-items-center py-2">
              <h3>{{ item.title }}</h3>
              <p class="h5">NT$ {{ item.price }}</p>
            </div>
            <ul class="list-unstyled d-flex">
              <li class="me-1">
                <a href="" @click.prevent="addFavor(item.id)">
                  <span class="material-icons">favorite</span>
                </a>
              </li>
              <li>
                <a href="" @click.prevent="addCart(item.id)">
                  <span class="material-icons">shopping_bag</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="d-flex justify-content-center">
          <Pagination :page="pagination" @get-data="getProducts"></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import emitter from '../../assets/js/emitter';

export default {
  name: 'Products',
  data() {
    return {
      products: [],
      isLoading: false,
      product: {},
      pagination: {},
      categories: [],
      selectCategory: '',
    };
  },
  components: {
    Pagination,
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            this.getCategories();
            this.isLoading = false;
          } else {
            this.$swal({
              title: res.data.message,
              icon: 'error',
              showCancelButton: true,
              cancelButtonText: '取消',
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    getCategories() {
      const categories = new Set();
      this.products.forEach((item) => {
        categories.add(item.category);
      });
      this.categories = [...categories];
    },
    addCart(id, qty = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http
        .post(url, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            emitter.emit('update-cart');
            this.$swal({
              icon: 'success',
              title: res.data.message,
              confirmButtonColor: '#3085d6',
            });
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addFavor(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, id)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$swal({
              icon: 'success',
              title: '已加入我的最愛',
              confirmButtonColor: '#3085d6',
            });
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    filterProducts() {
      return this.products.filter((item) => item.category.match(this.selectCategory));
    },
  },
};
</script>

<style lang="scss">
.productImg:hover {
  background: gray;
}
</style>

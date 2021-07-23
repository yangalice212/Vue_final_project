<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Shop</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link to="/" class="nav-link">About</router-link>
          <router-link to="/products" class="nav-link">Products</router-link>
          <router-link to="/cart" class="nav-link">Cart({{ cart.qty }})</router-link>
          <router-link to="/login" class="nav-link">Admin</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view></router-view>
  <footer class="bg-dark text-white py-3 text-center">here is footer</footer>
</template>

<script>
export default {
  data() {
    return {
      cart: {},
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          console.log(this.cart);
          if (res.data.success) {
            console.log(res);
            this.cart = res.data.data.carts;
            console.log(this.cart);
            this.isLoading = false;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    mounted() {
      this.getCart();
      console.log('ddd');
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Shop - Admin</a>
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
        <div class="navbar-nav">
          <router-link to="/admin/products" class="nav-link"
            >Products</router-link
          >
          <router-link to="/admin/orders" class="nav-link">Orders</router-link>
          <router-link to="/admin/coupon" class="nav-link">Coupon</router-link>
          <router-link to="/" class="nav-link">Front</router-link>
          <a href="#" class="nav-link" @click.prevent="signout">Signout</a>
        </div>
      </div>
    </div>
  </nav>
  <router-view v-if="checkLoginStatus"></router-view>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      checkLoginStatus: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const url = `${process.env.VUE_APP_API}api/user/check`;
        this.$http
          .post(url)
          .then((res) => {
            if (res.data.success) {
              this.checkLoginStatus = true;
            } else {
              alert(res.data.message);
              this.$router.push('/login');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert('您尚未登入');
        this.$router.push('/login');
      }
    },
    signout() {
      document.cookie = 'hexToken=;expires=;';
      alert('請重新登入');
      this.$router.push('/login');
    },
  },
};
</script>

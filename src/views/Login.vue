<template>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="login">
      <div class="col-md-4">
        <img src="" alt="" />
        <h1 class="h2 mb-4 text-center">後台管理系統</h1>
        <div>
          <!-- <label for="inputEmail" class="sr-only">Email address</label> -->
          <input
            type="email"
            id="inputEmail"
            class="form-control rounded-0 border-dark border-bottom-0"
            placeholder="Email address"
            v-model="user.username"
            required
            autofocus
          />
        </div>
        <div>
          <!-- <label for="inputPassword" class="sr-only">Password</label> -->
          <input
            type="password"
            id="inputPassword"
            class="form-control rounded-0 border-dark"
            v-model="user.password"
            placeholder="Password"
            required
          />
        </div>
        <div class="text-end mt-3">
          <button class="btn btn-lg btn-dark w-100" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http
        .post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
            this.$router.push('/admin/products');
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
input[type='email'],
input[type='password'] {
  padding: 10px;
}
</style>

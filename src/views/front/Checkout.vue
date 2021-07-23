<template>
  <Loading :isLoading="isLoading" />
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6" v-if="carts">
        <h2 class="mb-3">購物車列表</h2>
        <ul class="list-unstyled">
          <li v-for="item in cart" :key="item.id" class="mb-3">
            <div class="row align-items-center">
              <div
                class="col-md-4"
                style="
                  height: 150px;
                  background-size: cover;
                  background-position: center;
                "
                :style="{ 'background-image': `url(${item.product.imageUrl})` }"
              ></div>
              <div class="col-md-8">
                <h4>{{ item.product.title }}</h4>
                <p>NT$ {{ item.product.price }} x {{ item.qty }} / {{ item.product.unit }}</p>
              </div>
            </div>
          </li>
        </ul>
        <p class="h2 text-center">總金額 : NT$ {{ carts.total }}</p>
      </div>
      <div class="col-md-6">
        <h2 class="text-center mb-3">訂購人資料</h2>
        <div class="">
          <Form ref="form" v-slot="{ errors }">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></Field>
              <error-message name="email" class="invalid-feedback"> </error-message>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <Field
                id="tel"
                name="電話"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required"
                v-model="form.user.tel"
              ></Field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
          </Form>
        </div>
      </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-outline-secondary">上一步</button>
          <button type="button" class="btn btn-primary">確認訂單</button>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      cart: [],
      carts: {},
      isLoading: false,
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data.carts;
            this.carts = res.data.data;
            this.isLoading = false;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // onSubmit() {
    //   this.isLoading = true;
    //   const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
    //   const order = this.form;
    //   this.$http
    //     .post(url, { data: order })
    //     .then((res) => {
    //       if (res.data.success) {
    //         this.isLoading = false;
    //         alert(res.data.message);
    //         this.form = {};
    //         this.$route.push('/finish');
    //       } else {
    //         alert(res.data.message);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
};
</script>

<template>
  <Loading :isLoading="isLoading" />
  <div class="container my-5">
    <div class="row pt-5 text-center" v-if="order">
      <h2 class="mb-5">確認訂單</h2>
      <p class="col-4 fw-bold mb-4 pb-4 border-bottom">下單日期：</p>
      <p class="col-8 mb-4 pb-4 border-bottom">{{ order?.create_at }}</p>
      <p class="col-4 fw-bold mb-4 pb-4 border-bottom">訂單編號：</p>
      <p class="col-8 mb-4 pb-4 border-bottom">{{ order?.id }}</p>
      <p class="col-4 fw-bold mb-4 pb-4 border-bottom">顧客姓名：</p>
      <p class="col-8 mb-4 pb-4 border-bottom">{{ order?.user?.name }}</p>
      <p class="col-4 fw-bold mb-4 pb-4 border-bottom">聯絡電話：</p>
      <p class="col-8 mb-4 pb-4 border-bottom">{{ order?.user?.tel }}</p>
      <p class="col-4 fw-bold mb-4 pb-4 border-bottom">電子郵件：</p>
      <p class="col-8 mb-4 pb-4 border-bottom">{{ order?.user?.email }}</p>
      <p class="col-4 fw-bold mb-4 pb-4 border-bottom">地址：</p>
      <p class="col-8 mb-4 pb-4 border-bottom">{{ order?.user?.address }}</p>
      <p v-if="order?.message" class="col-4 fw-bold mb-4 pb-4 border-bottom">
        備註：
      </p>
      <p v-if="order?.message" class="col-8 mb-4 pb-4 border-bottom">
        {{ order?.message }}
      </p>
      <p class="col-4 fw-bold mb-4 pb-4 border-bottom">訂單金額：</p>
      <p class="col-8 mb-4 pb-4 border-bottom ">NT${{ order.total }}</p>
      <div class="text-center">
        <button type="button" class="btn btn-primary w-25" @click="pay(orderID)">
          確認結帳
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      order: {},
      orderID: '',
    };
  },
  mounted() {
    this.orderID = this.$route.params.order;
    this.getOrder(this.orderID);
  },
  methods: {
    getOrder(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            this.isLoading = false;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pay(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${id}`;
      this.$http
        .post(url)
        .then((res) => {
          if (res.data.success) {
            console.log(res);
            this.order = res.data.order;
            this.$router.push({
              name: 'finish',
              params: { order: this.orderID },
            });
            this.isLoading = false;
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

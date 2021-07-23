<template>
  <Loading :isLoading="isLoading"/>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-7">
        <div
          style="
            height: 600px;
            background-size: cover;
            background-position: center;
          "
          :style="{ 'background-image': `url(${product.imageUrl})` }"
        ></div>
      </div>
      <div class="col-md-5">
        <ul class="list-unstyled">
          <li class="h3">
            {{ product.title }}
          </li>
          <li class="h4">
            NT$ {{ product.price }}
          </li>
          <li>
            {{ product.content }}
          </li>
          <li>
            {{ product.description }}
          </li>
        </ul>
        <div class="d-flex w-50 mb-3 btn-group">
          <button
            class="btn btn-outline-secondary remove text-xl"
            type="button"
            @click="minusQty"
            :disabled="qty <= 1"
          >-</button>
          <input
            class="text-center quantity w-100 text-lg"
            type="number"
            min="1"
            v-model="qty"
          />
          <button type="button"
            class="btn btn-outline-secondary plus text-xl"
            @click="addQty">+</button>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          @click="addCart(product.id, qty)"
          >加入購物車</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data() {
    return {
      product: {},
      isLoading: false,
      qty: 1,
    };
  },
  methods: {
    minusQty() {
      this.qty -= 1;
    },
    addQty() {
      this.qty += 1;
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
          console.log(res);
          if (res.data.success) {
            this.isLoading = false;
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
    updateCart(item) {
      this.loadingStatus.loadingItem = item.id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product.id,
        qty: item.qty,
      };
      this.$http
        .put(url, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.loadingStatus.loadingItem = '';
            this.getCart();
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.isLoading = true;
    const { id } = this.$route.params;
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
    this.$http
      .get(url)
      .then((res) => {
        if (res.data.success) {
          this.product = res.data.product;
          this.isLoading = false;
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

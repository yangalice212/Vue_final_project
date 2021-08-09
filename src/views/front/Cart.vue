<template>
  <Loading :isLoading="isLoading" />
  <div class="container my-3">
    <h2 class="text-center mb-3">購物車</h2>
    <div v-if="cart.length !== 0">
      <div class="table-responsive">
        <div class="text-end mb-3">
          <button type="button" class="btn btn-outline-danger" @click="delCart">
            刪除全部購物車
          </button>
        </div>
        <table class="table align-middle mb-3">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th width="300">數量/單位</th>
              <th class="text-end">價格</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart">
              <tr v-for="(item, index) in cart" :key="item.id">
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="delCartItem(item.id)"
                  >
                    <i class="fas fa-spinner fa-pulse"></i>
                    x
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                </td>
                <td>
                  <div class="d-flex w-50 btn-group">
                    <button
                      class="btn btn-outline-secondary remove text-xl"
                      type="button"
                      @click="minusQty(index)"
                      :disabled="item.qty <= 1"
                    >
                      -
                    </button>
                    <input
                      class="text-center quantity w-100 text-lg"
                      type="number"
                      min="1"
                      v-model.number="item.qty"
                      @change="updateCart(item)"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-secondary plus text-xl"
                      @click="addQty(index)"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td class="text-end">
                  {{ item.total }}
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">NT$ {{ carts.total }}</td>
            </tr>
            <tr>
              <td colspan="4" class="text-end">
                <div class="input-group w-25 ms-auto">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="輸入優惠卷代碼"
                    v-model="couponCode"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="useCoupon(couponCode)"
                  >
                    套用優惠卷
                  </button>
                </div>
              </td>
            </tr>
            <tr v-if="carts.final_total !== carts.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">NT$ {{ carts.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="text-end">
          <button @click="goPay" class="btn btn-outline-primary">結帳去</button>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <h3>目前購物車是空的哦～</h3>
    </div>
    <div class="text-center">
      <router-link to="/products" class="btn btn-primary">
        繼續購物
      </router-link>
    </div>
  </div>
</template>

<script>
import emitter from '../../assets/js/emitter';

export default {
  name: 'Cart',
  data() {
    return {
      cart: [],
      carts: {},
      isLoading: false,
      qty: 1,
      couponCode: '',
    };
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
    minusQty(index) {
      this.cart[index].qty -= 1;
      this.updateCart(this.cart[index]);
    },
    addQty(index) {
      this.cart[index].qty += 1;
      this.updateCart(this.cart[index]);
    },
    updateCart(item) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product.id,
        qty: item.qty,
      };
      this.$http
        .put(url, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.getCart();
            this.isLoading = false;
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goPay() {
      if (this.cart.length !== 0) {
        this.$router.push('/checkout');
      } else {
        this.$swal({
          icon: 'warning',
          title: '購物車是空的呦',
          confirmButtonColor: '#3085d6',
        });
      }
    },
    useCoupon(code) {
      this.couponCode = code;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http
        .post(url, { data: { code } })
        .then((res) => {
          if (res.data.success) {
            this.getCart();
            this.$swal(res.data.message, '', 'success');
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
    delCartItem(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$swal({
        icon: 'warning',
        title: '確定要刪除嗎？',
        showCancelButton: true,
        confirmButtonText: '確定',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          this.isLoading = true;
          this.$http.delete(url).then((res) => {
            if (res.data.success) {
              this.isLoading = false;
              this.getCart();
              emitter.emit('update-cart');
              this.$swal(res.data.message, '', 'success');
            } else {
              this.$swal({
                title: res.data.message,
                icon: 'error',
                showCancelButton: true,
                cancelButtonText: '取消',
              });
            }
          });
        }
      });
    },
    delCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$swal({
        icon: 'warning',
        title: '確定要刪除嗎？',
        showCancelButton: true,
        confirmButtonText: '確定',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          this.isLoading = true;
          this.$http.delete(url).then((res) => {
            if (res.data.success) {
              this.isLoading = false;
              this.$swal(res.data.message, '', 'success');
              this.getCart();
              emitter.emit('update-cart');
            } else {
              this.isLoading = false;
              this.$swal({
                title: res.data.message,
                icon: 'error',
                showCancelButton: true,
                cancelButtonText: '取消',
              });
            }
          });
        }
      });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>

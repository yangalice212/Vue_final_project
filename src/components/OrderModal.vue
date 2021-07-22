<template>
  <div
    id="orderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="orderModalLabel" class="modal-title">編輯訂單</h5>
          <button
            type="button"
            class="btn-close bg-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <div class="row mb-2">
                <div class="form-group col-md-6">
                  <label for="id" class="mb-2">訂單編號</label>
                  <input
                    type="text"
                    v-model="tempOrder.id"
                    id="id"
                    class="form-control bg-white border-0"
                    readonly
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="time" class="mb-2">購買時間</label>
                  <input
                    type="text"
                    v-model="tempOrder.create_at"
                    id="time"
                    class="form-control bg-white border-0"
                    readonly
                  />
                </div>
              </div>
              <div class="row mb-2">
                <div class="form-group col-md-6">
                  <label class="mb-2">是否付款</label>
                  <div>
                    <span v-if="tempOrder.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </div>
                </div>
                <div class="form-group col-md-6" v-if="tempOrder.is_paid">
                  <label for="paidTime" class="mb-2">付款時間</label>
                  <input
                    type="text"
                    v-model="tempOrder.paid_date"
                    id="paidTime"
                    class="form-control bg-white border-0"
                    readonly
                  />
                </div>
              </div>
              <div class="row mb-2">
                <div class="form-group col-md-6">
                  <label for="payment" class="mb-2">付款方式</label>
                  <input
                    type="text"
                    v-model="tempOrder.payment_method"
                    id="payment"
                    class="form-control"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="message" class="mb-2">留言</label>
                  <textarea
                    type="text"
                    v-model="tempOrder.message"
                    id="message"
                    class="form-control bg-white"
                    readonly
                  />
                </div>
              </div>
              <hr>
              <div class="row mb-2" v-if="tempOrder.user">
                <div class="form-group col-md-6">
                  <label for="name" class="mb-2">購買人姓名</label>
                  <input
                    type="text"
                    v-model="tempOrder.user.name"
                    id="name"
                    class="form-control"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="tel" class="mb-2">購買人電話</label>
                  <input
                    type="number"
                    v-model.number="tempOrder.user.tel"
                    id="tel"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="row" v-if="tempOrder.user">
                <div class="form-group col-md-6">
                  <label for="address" class="mb-2">購買人地址</label>
                  <input
                    type="text"
                    v-model="tempOrder.user.address"
                    id="address"
                    class="form-control"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="email" class="mb-2">購買人信箱</label>
                  <input
                    type="email"
                    v-model="tempOrder.user.email"
                    id="email"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <h3 class="mb-3">產品資訊</h3>
              <ul class="list-unstyled">
                <li v-for="item in tempOrder.products" :key="item.id"
                  class="pb-2 mb-2">
                  <p>產品名稱 : {{ item.product.title }}</p>
                  <p>數量 : {{ item.qty }} / {{ item.product.unit }}</p>
                  <p>小計 : NT$ {{ item.final_total }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            @click="$emit('update-order', tempOrder)"
            type="button"
            class="btn btn-primary"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from '../mixins/modal';

export default {
  props: ['order'],
  data() {
    return {
      tempOrder: {},
    };
  },
  mixins: [modal],
  watch: {
    order() {
      this.tempOrder = this.order;
    },
  },
};
</script>

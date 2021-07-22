<template>
  <div
    id="detailModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="orderModalLabel" class="modal-title">查看訂單</h5>
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
              <h6 class="h3 mb-3">訂單資訊</h6>
              <ul class="list-unstyled">
                <li class="d-flex">
                  <p class="me-2">訂單編號 :</p>
                  <p>{{ tempOrder.id }}</p>
                </li>
                <li class="d-flex">
                  <p class="me-2">購買時間 :</p>
                  <p>{{ tempOrder.create_at }}</p>
                </li>
                <li class="d-flex">
                  <p class="me-2">訂單狀態 :</p>
                  <p>
                    <span v-if="tempOrder.is_enabled" class="text-success">已付款</span>
                    <span v-else>未付款</span>
                  </p>
                </li>
                <li class="d-flex">
                  <p class="me-2">付款方式 :</p>
                  <p>{{ tempOrder.payment }}</p>
                </li>
                <li class="d-flex">
                  <p class="me-2">金額 :</p>
                  <p>NT$ {{ tempOrder.total }}</p>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <h6 class="h3 mb-3">顧客資訊</h6>
              <ul class="list-unstyled" v-if="tempOrder.user">
                <li class="d-flex">
                  <p class="me-2">顧客姓名 :</p>
                  <p>{{ tempOrder.user.name }}</p>
                </li>
                <li class="d-flex">
                  <p class="me-2">顧客電話 :</p>
                  <p>{{ tempOrder.user.tel }}</p>
                </li>
                <li class="d-flex">
                  <p class="me-2">顧客信箱 :</p>
                  <p>{{ tempOrder.user.email }}</p>
                </li>
                <li class="d-flex">
                  <p class="me-2">寄送地址 :</p>
                  <p>{{ tempOrder.user.address }}</p>
                </li>
              </ul>
            </div>
            <hr>
            <h6 class="h3 mb-3">購買產品</h6>
            <ul class="list-unstyled d-flex">
              <li v-for="item in tempOrder.products" :key="item.id"
                class="pb-2 mb-2">
                <p class="me-5">產品名稱 : {{ item.product.title }}</p>
                <p class="me-5">數量 : {{ item.qty }} / {{ item.product.unit }}</p>
                <p>小計 : NT$ {{ item.final_total }}</p>
              </li>
            </ul>
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

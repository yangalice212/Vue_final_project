<template>
  <div
    id="statuModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-secondary text-white py-4">
          <h5 class="modal-title" id="exampleModalLabel">選擇訂單狀態</h5>

          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <button
            v-if="status !== 'wait'"
            class="btn btn-outline-info me-4"
            @click="updateStatus('wait')"
          >
            等待付款中
          </button>
          <div
            v-if="status !== 'handle'"
            class="btn btn-outline-primary me-4"
            @click="updateStatus('handle')"
          >
            處理中
          </div>
          <div
            v-if="status !== 'finish'"
            class="btn btn-outline-success me-4"
            @click="updateStatus('finish')"
          >
            完成
          </div>
          <div
            v-if="status !== 'cancel'"
            class="btn btn-outline-secondary me-4"
            @click="updateStatus('cancel')"
          >
            取消
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from '../mixins/modal';

export default {
  props: {
    order: {
      type: Object,
    },
    status: {
      type: String,
    },
  },
  data() {
    return {
      tempOrder: {},
    };
  },
  watch: {
    order() {
      this.tempOrder = { ...this.order, status: this.status };
    },
  },
  mixins: [modal],
  methods: {
    updateStatus(status) {
      this.tempOrder.status = status;
      if (status === 'handle' || status === 'finish') {
        this.tempOrder.is_paid = true;
        if (!this.tempOrder.paid_date) {
          this.tempOrder.paid_date = Math.round(new Date().getTime() / 1000);
        }
      } else if (status === 'wait') {
        this.tempOrder.is_paid = false;
        this.tempOrder.paid_date = null;
      }
      this.$emit('emit-status', this.tempOrder);
    },
  },
};
</script>

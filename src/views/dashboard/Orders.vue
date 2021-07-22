<template>
  <div class="container">
    <div class="text-end my-4">
      <button
        type="button"
        class="btn btn-outline-danger"
        @click.prevent="delAllOrders"
      >
        刪除全部訂單
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th width="200">訂單編號</th>
          <th width="110">購買人姓名</th>
          <th width="150">購買人電話</th>
          <th width="120">應付金額</th>
          <th width="100">訂單狀態</th>
          <th width="100">查看訂單</th>
          <th width="150">編輯 / 刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>
            {{ new Date(item.create_at * 1000).toISOString().split("T")[0] }}
          </td>
          <td>
            {{ item.id }}
          </td>
          <td>{{ item.user.name }}</td>
          <td>{{ item.user.tel }}</td>
          <td>{{ item.total }}</td>
          <td>
            <div
              v-if="!item.is_paid && item.status !== 'cancel'"
              class="btn btn-sm btn-outline-info"
              @click="openModal(item, 'status')"
            >
              等待付款中
            </div>
            <div
              v-if="item.is_paid  && item.status !== 'finish'  && item.status !== 'cancel'"
              class="btn btn-sm btn-outline-primary"
              @click="openModal(item, 'status')"
            >
              處理中
            </div>
            <div
              v-if="item.status === 'finish'"
              class="btn btn-sm btn-outline-success"
              @click="openModal(item, 'status')"
            >
              完成
            </div>
            <div
              v-if="item.status === 'cancel'"
              class="btn btn-sm btn-outline-secondary"
              @click="openModal(item, 'status')"
            >
              取消
            </div>
          </td>
          <td>
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="openModal(item, 'detail')"
            >
              查看
            </button>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                @click="openModal(item, 'edit')"
              >
                編輯
              </button>
              <button
                type=" button"
                class="btn btn-sm btn-outline-danger"
                @click="delOrder(item.id)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="d-flex justify-content-center">
    <Pagination
      :page="pagination"
      @get-data="getOrders"
    ></Pagination>
  </div>
  <OrderModal
    :order="tempOrder"
    @update-order="updateOrder"
    ref="orderModal"
  ></OrderModal>
  <DetailModal
    :order="tempOrder"
    ref="detailModal"
  ></DetailModal>
  <StatusModal
    :order="tempOrder"
    :status="status"
    @emit-status="updateOrder"
    ref="statusModal"
  >
  </StatusModal>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import OrderModal from '@/components/OrderModal.vue';
import DetailModal from '@/components/DetailModal.vue';
import StatusModal from '@/components/StatusModal.vue';

export default {
  name: 'Orders',
  data() {
    return {
      orders: {},
      status: '',
      tempOrder: {},
      pagination: {},
    };
  },
  components: {
    Pagination,
    OrderModal,
    DetailModal,
    StatusModal,
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    getOrders(page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders;
            this.pagination = res.data.pagination;
          } else {
            alert(res.data.message);
          }
        });
    },
    openModal(item, modal) {
      const { orderModal, detailModal, statusModal } = this.$refs;
      this.tempOrder = { ...item };
      switch (modal) {
        case 'detail':
          detailModal.openModal();
          break;
        case 'edit':
          orderModal.openModal();
          break;
        case 'status':
          if (item.status) {
            this.status = item.status;
            console.log(item.is_paid);
          } else {
            if (item.is_paid) {
              this.status = 'handle';
            }
            this.status = 'wait';
          }
          statusModal.openModal();
          break;
        default:
          break;
      }
    },
    updateOrder(item) {
      this.isLoading = true;
      const { orderModal, statusModal } = this.$refs;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;

      this.$http.put(url, { data: this.tempOrder })
        .then((res) => {
          if (res.data.success) {
            this.$swal({
              title: res.data.message,
            });
            orderModal.hideModal();
            statusModal.hideModal();
            this.getOrders();
            this.isLoading = false;
          } else {
            this.$swal({
              title: res.data.message,
              icon: 'error',
              showCancelButton: true,
              cancelButtonText: '取消',
            });
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delOrder(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
      this.$swal({
        icon: 'warning',
        title: '確定要刪除嗎？',
        showCancelButton: true,
        confirmButtonText: '確定',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$http.delete(url).then((res) => {
            if (res.data.success) {
              this.$swal(res.data.message, '', 'success');
              this.getOrders();
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
    delAllOrders() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      this.$swal({
        icon: 'warning',
        title: '確定要全部刪除嗎？',
        showCancelButton: true,
        confirmButtonText: '確定',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$http.delete(url).then((res) => {
            if (res.data.success) {
              this.$swal(res.data.message, '', 'success');
              this.getOrders();
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
  },
};
</script>

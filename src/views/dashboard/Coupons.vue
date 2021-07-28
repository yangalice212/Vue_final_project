<template>
  <Loading :isLoading="isLoading"/>
  <div class="container">
    <div class="text-end my-4">
      <button
        type="button"
        class="btn btn-primary me-2"
        @click.prevent="openModal({}, 'new')"
      >
        新增優惠卷
      </button>
      <button type="button" class="btn btn-outline-danger" @click.prevent="delCoupons">
        刪除全部優惠卷
      </button>
    </div>
    <div class="table-responsive">
      <table class="table" style="min-width: 550px;">
        <thead>
          <tr>
            <th>優惠卷名稱</th>
            <th>折價</th>
            <th>到期日</th>
            <th width="120">狀態</th>
            <th width="150">編輯 / 刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ new Date(item.due_date * 1000).toISOString().split("T")[0] }}</td>
            <td>
              <span v-if="item.is_enabled" class="text-success">啟用</span>
              <span v-else>未啟用</span>
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
                  @click="delCoupon(item.id)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
  <div class="d-flex justify-content-center">
    <Pagination
      :page="pagination"
      @get-data="getCoupons"
    ></Pagination>
  </div>
  <CouponModal
    :coupon="tempCoupon"
    :is-new="isNew"
    @update-coupon="updateCoupon"
    ref="couponModal"
    ></CouponModal>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Coupons',
  data() {
    return {
      coupons: [],
      tempCoupon: {
        is_enabled: false,
      },
      pagination: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    Pagination,
    CouponModal,
  },
  created() {
    this.getCoupons();
  },
  methods: {
    openModal(item, status) {
      const { couponModal } = this.$refs;
      this.tempCoupon = { ...item };
      switch (status) {
        case 'new':
          this.isNew = true;
          this.tempCoupon = { due_date: new Date().getTime() / 1000, is_enabled: 0 };
          couponModal.openModal();
          break;
        case 'edit':
          this.isNew = false;
          couponModal.openModal();
          break;
        default:
          break;
      }
    },
    getCoupons(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        } else {
          alert(res.data.message);
        }
      });
    },
    updateCoupon() {
      this.isLoading = true;
      const { couponModal } = this.$refs;
      const method = this.isNew ? 'post' : 'put';
      const id = this.isNew ? '' : `${this.tempCoupon.id}`;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;

      this.$http[method](url, { data: this.tempCoupon })
        .then((res) => {
          if (res.data.success) {
            this.$swal({
              title: res.data.message,
            });
            this.getCoupons();
            couponModal.hideModal();
            this.isLoading = false;
          } else {
            alert(res.data.message);
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delCoupon(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;
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
              this.getCoupons();
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
    delCoupons() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons/all`;
      this.$swal({
        icon: 'warning',
        title: '確定要全部刪除嗎？',
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
              this.getProducts();
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

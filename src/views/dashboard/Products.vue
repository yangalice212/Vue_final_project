<template>
  <Loading :isLoading="isLoading"/>
  <div class="container">
    <div class="text-end my-4">
      <button
        type="button"
        class="btn btn-primary me-2"
        @click.prevent="openModal({}, 'new')"
      >
        新增產品
      </button>
      <button type="button" class="btn btn-outline-danger" @click.prevent="delProducts">
        刪除全部產品
      </button>
    </div>
    <div class="table-responsive">
      <table class="table" style="min-width: 600px;">
        <thead>
          <tr>
            <th class="d-none d-md-table-cell">產品圖片</th>
            <th>產品名稱</th>
            <th>原價</th>
            <th>售價</th>
            <th width="120">狀態</th>
            <th width="150">編輯 / 刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td class="d-none d-md-table-cell">
              <div
                  style="
                    height: 100px;
                    background-size: cover;
                    background-position: center;
                  "
                  :style="{ 'background-image': `url(${item.imageUrl})` }"
                ></div>
            </td>
            <td>{{ item.title }}</td>
            <td>NT$ {{ item.price }}</td>
            <td>NT$ {{ item.origin_price }}</td>
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
                  @click="delProduct(item.id)"
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
      @get-data="getProducts"
    ></Pagination>
  </div>
  <ProductModal
    :product="tempProduct"
    :is-new="isNew"
    @update-product="updateProduct"
    ref="productModal"
    ></ProductModal>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Products',
  data() {
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    Pagination,
    ProductModal,
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      console.log(this.isLoading);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          } else {
            this.$swal({
              title: res.data.message,
              icon: 'error',
              showCancelButton: true,
              cancelButtonText: '取消',
            });
          }
        }).catch((err) => {
          console.log(err);
        });
    },
    openModal(item, status) {
      const { productModal } = this.$refs;
      this.tempProduct = { ...item };
      switch (status) {
        case 'new':
          this.isNew = true;
          productModal.openModal();
          break;
        case 'edit':
          this.isNew = false;
          productModal.openModal();
          break;
        default:
          break;
      }
    },
    updateProduct() {
      this.isLoading = true;
      const { productModal } = this.$refs;
      const method = this.isNew ? 'post' : 'put';
      const id = this.isNew ? '' : `${this.tempProduct.id}`;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`;

      this.$http[method](url, { data: this.tempProduct })
        .then((res) => {
          if (res.data.success) {
            this.$swal({
              title: res.data.message,
              icon: 'success',
            });
            this.getProducts();
            productModal.hideModal();
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
    delProduct(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
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
    delProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`;
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

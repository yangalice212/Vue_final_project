<template>
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
    };
  },
  // methods: {},
  created() {
    const { id } = this.$route.params;
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
    this.$http
      .get(url)
      .then((res) => {
        if (res.data.success) {
          this.product = res.data.product;
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

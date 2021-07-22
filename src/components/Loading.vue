<template>
  <div class="loading" v-if="isLoading">
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
  </div>
</template>

<style lang="scss">
  .demo {
    width: 4px;
    height: 4px;
    border-radius: 2px;
    float: left;
    margin: 0 3px;
    animation: demo liner is infinite;
  }
  .demo:nth-child(1) {
    animation-delay: 0s;
  }
  .demo:nth-child(2) {
    animation-delay: 0.15s;
  }
  .demo:nth-child(3) {
    animation-delay: 0.3s;
  }
  .demo:nth-child(4) {
    animation-delay: 0.45s;
  }
  .demo:nth-child(5) {
    animation-delay: 0.6s;
  }
  @keyframes demo {
    0%, 60%, 100% {
      transform: scale(1);
    }
    30% {
      transform: scale(2.5);
    }
  }
</style>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

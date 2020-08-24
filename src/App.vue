<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href @click="GotoHomePage">Gift Card</a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <a href @click="GotoOrderPage">Order a Gift Card</a>
          </li>
          <li>
            <a href @click="ShowOrders">Order History</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <div class="homePage">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",

  data() {
    return {};
  },
  methods: {
    GotoOrderPage: function () {
      this.$router.push("/makeOrder");
    },
    ShowOrders: function () {
      this.$router.push("/showOrders");
    },
    GotoHomePage: function () {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
</style>

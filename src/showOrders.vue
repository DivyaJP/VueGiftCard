<template>
  <div class="container">
    <div class="row">
      <div v-if="orders.count!=0">
        <div class="table">
          <div class="Title">
            <p>Order History</p>
          </div>
          <div class="Heading">
            <div class="Cell">
              <p>OrderId</p>
            </div>
            <div class="Cell">
              <p>Recipient Name</p>
            </div>
            <div class="Cell">
              <p>Ordered Date</p>
            </div>
            <div class="Cell">
              <p>Gift Card Value</p>
            </div>
            <div class="Cell">
              <p>Commission (5%)</p>
            </div>
            <div class="Cell">
              <p>Delievery Status</p>
            </div>
          </div>
          <div class="Row" v-for="order in orders">
            <div class="Cell">
              <p>{{order.id}}</p>
            </div>
            <div class="Cell">
              <p>{{order.CustomerFirstName}} {{order.CustomerLastName}}</p>
            </div>
            <div class="Cell">
              <p>{{order.OrderedDate}}</p>
            </div>
            <div class="Cell">
              <p>{{order.GiftCardValue}}</p>
            </div>
            <div class="Cell">
              <p>{{order.CommissionAmount}}</p>
            </div>
            <div class="Cell">
              <!--<p>{{order.DeliveryStatus}}</p>-->
             <!-- <router-link :to="{path:'/editOrders',params:{id:order.id}}"> {{order.DeliveryStatus}}</router-link>-->
              <router-link :to="{name:'editOrder',params:{id:order.id}}"> {{order.DeliveryStatus}} </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Order: {
        CustomerFirstName: "",
        CustomerLastName: "",
        CustomerMobileNo: "",
        CustomerAddress: "",
        GiftCardValue: 0,
        CommissionAmount: 0,
        PayableAmount: 0,
      },
      orders: [],
    };
  },
  
  methods: {
    showOrders: function () {
      /*this.$http
        .get("http://localhost:3000/orderdetails")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const responseArray = [];
          for (let key in data) {
            responseArray.push(data[key]);
          }
          this.orders = responseArray;
        });*/
    },
  },
  created:function(){
      this.$http
        .get("http://localhost:3000/orderdetails")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const responseArray = [];
          for (let key in data) {
            responseArray.push(data[key]);
          }
          this.orders = responseArray;
        });
  }
};
</script>
<style scoped>
.Table {
  display: table;
}
.Title {
  display: table-caption;
  text-align: center;
  font-weight: bold;
  font-size: larger;
}
.Heading {
  display: table-row;
  font-weight: bold;
  text-align: center;
  background-color: royalblue;
}
.Row {
  display: table-row;
}
.Cell {
  display: table-cell;
  border: solid;
  border-width: thin;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
<template>
  <div>
    <form>
      <div>
        <div class="form-group">
          <label for="CustomerFirstName">Receipient First Name</label>
          <input
            type="text"
            id="CustomerFirstName"
            v-model="Order.CustomerFirstName"
            class="space"
            :readonly="!makeOrder"
          />
          <label for="CustomerLastName">Receipient Last Name</label>
          <input
            type="text"
            id="CustomerLastName"
            v-model="Order.CustomerLastName"
            :readonly="!makeOrder"
          />
          <br />
        </div>
      </div>
      <br />
      <div class="form-group">
        <label for="GiftCardValue">Gift Card Value</label>
        <input
          type="text"
          id="GiftCardValue"
          v-model="Order.GiftCardValue"
          :readonly="!makeOrder"
          @blur="PopulateAmountPayable"
        />

        <label for="PayableAmount">Amount Payable</label>
        <input
          type="text"
          id="PayableAmount"
          v-model="Order.PayableAmount"
          :readonly="!makeOrder"
          style="disabled:true"
        />
      </div>
      <br />
      <div class="form-group">
        <label for="CustomerMobileNo">Receipient Mobile Number</label>
        <input
          type="text"
          id="CustomerMobileNo"
          v-model="Order.CustomerMobileNo"
          :readonly="!makeOrder"
        />
        <label for="CustomerAddress">Address</label>
        <input
          type="text"
          id="CustomerAddress"
          v-model="Order.CustomerAddress"
          :readonly="!makeOrder"
        />
      </div>
      <br/>
      <div class="form-group" v-if="!makeOrder">
        <label for="OrderedDate">Order placed on</label>
        <input type="text" id="OrderedDate" v-model="Order.OrderedDate" :readonly="!makeOrder" />
        <label for="OrderStatus">Order Status</label>
        <input type="text" id="OrderStatus" v-model="Order.DeliveryStatus" :readonly="makeOrder" />
      </div>
      <div>
        <input type="submit" value="Submit" @click="onEdit" class="btn btn-primary" />
      </div>
    </form>
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
        DeliveryStatus: "",
        OrderedDate: "",
      },
    };
  },
  props: ["id", "makeOrder"],
  created: function () {
    if (this.id != "undefined" && this.id !== 0) {
      this.$http
        .get("http://localhost:3000/orderdetails/" + this.id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.Order = data;
        });
    }
  },
  methods: {
    onEdit: function () {
      if (this.makeOrder) {
        this.Order.DeliveryStatus = " Order  placed";
        this.$http.post("http://localhost:3000/orderdetails", this.Order).then(
          (res) => {
            alert(
              "You have successfully placed your order. Please check the status of your gift card in order history page"
            );
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        this.$http
          .put("http://localhost:3000/orderdetails/" + this.id, this.Order)
          .then(response => {
            alert("Delivery status is updated successfully");
          });
          this.$router.push("/showOrders");
      }
    },
    PopulateAmountPayable: function () {
      if (this.makeOrder) {
        this.Order.CommissionAmount = this.Order.GiftCardValue * 0.05;
        this.Order.PayableAmount =
          Number(this.Order.GiftCardValue) +
          Number(this.Order.CommissionAmount);
        this.Order.OrderedDate = new Date().toLocaleDateString();
        i;
        this.Order.DeliveryStatus = " Order to be placed";
      }
    },
  },
};
</script>
<template>
<div>
    <h2>Edit the delivery status of the  order here</h2>
    <br/>
<orderDetails :id="id"></orderDetails>
</div>
</template>
<script>
export default{
    data(){
        return{
            id: this.$route.params.id
        }
    },
    watch:{
        '$route'(to,from){
            this.id=to.params.id;
        }
    }
}
</script>
<template>
  <b-navbar class="head">
    <b-navbar-brand>
      <h5>Виробнича практика</h5>
    </b-navbar-brand>

    <b-navbar-nav>
        <b-nav-item to="/">
          <h6><span class="v-btn">Main</span></h6>
        </b-nav-item>
         <b-nav-item to="/TaskI">
          <h6><span class="task1">TaskI</span></h6>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
       <template v-if="user">
        </template>
        <template v-else>
          <b-nav-item to="/TaskII">
          <h6><span class="task2">TaskII</span></h6>
        </b-nav-item>
        <b-nav-item to="TaskIII">
          <h6><span class="task3">TaskIII</span></h6>
        </b-nav-item>
        </template>
        
      </b-navbar-nav>
  </b-navbar>
  
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>

<style scoped>
.head{
  background-color: #DAAD86;
  border: 2px solid #FBEEC1;

}
.v-btn{
  border-radius: 4px;
  background: #DAAD86;
  padding: 8px 16px;
  border: 2px solid #FBEEC1;

}
.task1{
  margin-left: 1090%;
  border-radius: 4px;
  padding: 8px 16px;
  border: 2px solid #FBEEC1;
}
.task2{
  margin-left: -80%;
  border-radius: 4px;
  padding: 8px 16px;
  border: 2px solid #FBEEC1;
}
.task3{
  border-radius: 4px;
  padding: 8px 16px;
  border: 2px solid #FBEEC1;
}
</style>
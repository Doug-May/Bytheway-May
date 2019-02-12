<template>
  <div id="footer" class="container">
    <h5>BYTHEWAY-MAY LLC &nbsp;&nbsp; | &nbsp;&nbsp; COPYRIGHT {{date}}</h5>
  </div>
</template>

<script>
let d = new Date();
let n = d.getFullYear();
export default {
  name: "Footer",
  data: function() {
    return {
      date: n
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  height: 80px;
}
#footer h5 {
  float: left;
}
</style>

<template>
  <div class="header">
    <img  class="logo" src="../../assets/images/logoWhite.png" alt="">
    <div class="linkTo">
      <img class="tomall" src="../../assets/images/toMall.png" alt="">
      <img class="toClub" src="../../assets/images/toClub.png" alt="">
      <router-link class="loginBtn" to="/login">登录</router-link>
    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height 60px
  background-color black 
  display flex
  justify-content center
  align-items center
  .logo
    width 122px
  .linkTo
    position absolute
    right 3%
    display flex
    align-items center
    img
      margin-right 20px
    .loginBtn
      color white
      text-decoration none
      font-size 15px
@media screen and (max-width: 750px)
  .header
    justify-content space-between
    padding 0 3%
  
</style>

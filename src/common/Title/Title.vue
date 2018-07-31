<template>
  <div>
    <span class="choseTitle"><slot></slot></span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.choseTitle
  font-size 30px
  color white
  position relative
  &::after 
    content ""
    display block
    position absolute 
    left 50% 
    margin-top 35px
    transform translateX(-50%)
    width 55px
    height 1px
    background-color #ff485b
</style>

<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.button 
  width 154px
  height 40px
  font-size 15.5px
  font-weight 700
  line-height 40px          
  text-align center
  color #ff485b
  background rgba(0,0,0,0)
  border 1px solid #ff485b
  cursor pointer
  position relative
  &:hover
    color white
  &::after
    content ""
    position absolute 
    width 156px
    height 42px
    box-sizing border-box
    border 2px solid #000
    top -2px
    left -2px
    clip rect(3px,120px,42px,0px)
    // clip rect(0px,120px,40px,0px)
    // clip rect(0px,156px,40px,34px)
    &:hover
      color white
      animation btnChange .5s linear infinite
    @keyframes btnChange 
      0%, 100%
        clip rect(0px,156px,40px,34px)
      50%
        clip rect(0px,120px,40px,0px)
</style>

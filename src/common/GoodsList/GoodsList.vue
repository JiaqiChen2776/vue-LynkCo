<template>
  <div class="goodsList">
    <div class="good" v-for="(item, index) in goodsList" :key="index">
      <img :src="item.imgUrl" alt="">
      <div class="proDesc"> 
        <span class="proName">{{item.proName}}</span>
        <span class="price">￥{{item.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsList: Array
  }
}
</script>

<style lang="stylus" scoped>
.goodsList
  display flex
  align-items center
  .good
    float left
    margin-right 1vw
    &:nth-child(4n)
      margin-right 0
    img 
      width 14.85vw
      height 8.91vw
    .proDesc
      display flex
      align-items center
      justify-content space-between
      padding 1.35vw 0
      height 3.6vw
      font-size 14px
      .price
        font-size 16px
        color #00C7B2
</style>

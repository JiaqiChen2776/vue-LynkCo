<template>
  <div class="footer">
    <div class="ft-link">
      <ul>
        <li><a href="#">媒体库</a></li>
        <li><a href="#">隐私政策</a></li>
        <li><a href="#">公司</a></li>
        <li><a href="#">退款说明</a></li>
      </ul>
    </div>
    <div class="ft-info">
      <div class="icon">
        <i class="weibo"></i>
        <i class="weixin"></i>
      </div>
      <div class="webInfo">
        <span>客服热线：4006-010101（24小时热线电话）</span>
        <span>浙ICP备11023935号-11</span>
        <span>浙B2-20160194</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.footer
  .ft-link
    width 100%
    height 49px
    background-color black 
    ul
      display flex
      align-items center
      justify-content center
      li
        list-style none 
        padding 0 15px
        a
          text-decoration none 
          color white
          font-size 14px
          &:hover
            color #ff485b
  .ft-info
    width 100%
    height 60px
    background white
    color black
    position relative
    display flex
    align-items center
    justify-content center
    .icon
      width 100px
      margin-right 10px
      display flex
      align-items center
      justify-content center
      i.weibo
        position absolute 
        width 20px
        height 20px
        cursor pointer
        background url('../../assets/images/weibo.png')
        background-size contain
        &:hover
          background url('../../assets/images/weibo_active.png') no-repeat
          background-size contain
      i.weixin
        position absolute 
        margin-left 30px
        width 20px
        height 20px
        cursor pointer
        background url('../../assets/images/weixin.png')
        background-size contain
        &:hover
          background url('../../assets/images/weixin_active.png') no-repeat
          background-size contain
    .webInfo
      display flex
      align-items center
      justify-content flex-start
      span 
        font-size 14px
        margin-right 10px
</style>

<template>
  <div class="home">
    <Header></Header>
    <Swiper class="swiper"></Swiper>
    <div class="choseCar">
      <Title>选择你的领克</Title>
      <div class="carList">
        <div class="car-item" v-for="(item, index) in carList" :key="index">
          <img :src="item.imgUrl" :alt="item.name">
          <Button>选择{{ item.name }}</Button>
        </div>
      </div>
    </div>
    <div class="lcMall">
      <Title class="mallTitle">领克精选</Title>
      <div class="main-products">
        <div class="proItem" v-for="(item, index) in mainPro" :key="index">
          <img :src="item.imgUrl" alt="">
          <div class="proDesc"> 
            <span class="proName">{{item.proName}}</span>
            <span class="price">￥{{item.price}}</span>
          </div>
        </div>
      </div>
      <div class="minor-products">
        <goods-list :goodsList="goodsList"></goods-list>
      </div>
      <Button>了解更多</Button>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/common/Header/Header'
import Swiper from '@/common/Swiper/Swiper'
import Title from '@/common/Title/Title'
import GoodsList from '@/common/GoodsList/GoodsList'
import Button from '@/common/Button/Button'
import Footer from '@/common/Footer/Footer'
export default {
  data() {
    return {
      mainPro: [
        {
          imgUrl: 'https://ossdopimg.lynkco.com/2018062701012646555556.png',
          proName: 'Alpha便携音箱',
          price: '599'
        },
        {
          imgUrl: 'https://ossdopimg.lynkco.com/2018062701033306471303.png',
          proName: '都市概念汽车模型（柏林）',
          price: '399'
        }
      ],
      goodsList: [
        {
          imgUrl: 'https://ossdopimg.lynkco.com/2018062701042398661028.png',
          proName: '黑色双肩背包',
          price: '3800'
        },
        {
          imgUrl: 'https://ossdopimg.lynkco.com/2018062701053477543393.png',
          proName: 'Tote包',
          price: '169'
        },
        {
          imgUrl: 'https://ossdopimg.lynkco.com/2018062701064522057674.png',
          proName: 'LOGO印花T恤',
          price: '780'
        },
        {
          imgUrl: 'https://ossdopimg.lynkco.com/2018062701073659160787.png',
          proName: '背包伞（长尾伞）',
          price: '129'
        }
      ],
      carList: [
        {
          imgUrl: 'https://ossdopimg.lynkco.com/2018052002274877547955.png',
          linkTo: '',
          name: '01'
        },
        {
          imgUrl: 'https://ossdopimg.lynkco.com/2018072622533824835138.png',
          linkTo: '',
          name: '01 PHEV'
        },
        {
          imgUrl: 'https://ossdopimg.lynkco.com/2018052002271455144234.png',
          linkTo: '',
          name: '02'
        }
      ]
    }
  },
  components: {
    Header,
    Swiper,
    Title,
    GoodsList,
    Button,
    Footer
  }
}
</script>

<style lang="stylus" scoped>
.home
  background-color black
  color white
  .swiper
    width 100%
  .choseCar
    margin-top 198px
    width 100%
    height 578px
    background-color black 
    color white
    display flex
    flex-direction column
    align-items center
    position relative
    .carList
      display flex
      align-items center
      justify-content space-between
      padding-top 235px !important 
      padding-bottom 100px
      .car-item
        display flex
        flex-direction column
        align-items center
        margin-right 70px
        &:nth-child(3)
          margin-right 0
        img 
          width 357px
          padding-top 50px
          margin-bottom 68px

  .lcMall
    width 100%
    padding 7.5vw 18.7vw 8vw
    background-color black
    display flex
    flex-direction column
    align-items center
    .mallTitle
      margin-bottom 130px
    .main-products
      display flex
      align-items center
      margin-bottom 1.1vw
      .proItem
        float left
        margin-right 1vw
        &:nth-child(2n)
          margin-right 0
        img 
          width 30.7vw
          height 18.5vw
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
    .minor-products
      margin-bottom 5.1vw


</style>

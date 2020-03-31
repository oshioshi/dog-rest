<template>
  <div class="miniature_schnauzer">
    <h1>ミニチュアシュナウザー</h1>
    <div class="cat_img">
      <img class="desc_img" alt="dog_miniature_schnauzer" src="../assets/dog_miniature_schnauzer.png">
    </div>
    <p class="bodyMsg">仙人のような眉毛が特徴的なミニチュアシュナウザー</p>
    <p class="bodyMsg">忍耐強く、好奇心旺盛で遊び好きな性格です</p>
    <dogInfo jsonFileName = "miniature_schnauzer.json"/>

  </div> 
</template>

<script>
import dogInfo from '@/components/dogInfo.vue'
export default {
  name: 'miniature_schnauzer',
  components: {
    dogInfo
  }
}
</script>

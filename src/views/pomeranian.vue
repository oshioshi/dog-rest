<template>
  <div class="pomeranian">
    <h1>ポメラニアン</h1>
    <div class="cat_img">
      <img class="desc_img" alt="dog_pomeranian" src="../assets/dog_pomeranian.png">
    </div>
    <p class="bodyMsg">小さな頭にふわふわな毛が特徴のポメラニアン</p>
    <p class="bodyMsg">活発でよく遊び、フレンドリーな性格をしています</p>
    <dogInfo jsonFileName = "pomeranian.json"/>


  </div> 
</template>

<script>
import dogInfo from '@/components/dogInfo.vue'
export default {
  name: 'pomeranian',
  components: {
    dogInfo
  }
}
</script>

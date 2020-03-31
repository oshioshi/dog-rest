<template>
  <div class="corgi">
    <h1>コーギー</h1>
    <div class="cat_img">
      <img class="desc_img" alt="dog_corgi" src="../assets/dog_corgi.png">
    </div>
    <p class="bodyMsg">短い脚とがっしりした体が特徴のコーギー</p>
    <p class="bodyMsg">賢く、好奇心旺盛で社交性が高いです</p>
    <dogInfo jsonFileName = "corgi.json"/>

  </div> 
</template>

<script>
import dogInfo from '@/components/dogInfo.vue'
export default {
  name: 'corgi',
  components: {
    dogInfo
  }
}
</script>

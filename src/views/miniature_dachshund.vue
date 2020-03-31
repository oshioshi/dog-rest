<template>
  <div class="miniature_dachshund">
    <h1>ミニチュアダックスフンド</h1>
    <div class="cat_img">
      <img class="desc_img" alt="dog_miniature_dachshund" src="../assets/dog_miniature_dachshund.png">
    </div>
    <p class="bodyMsg">胴長短足が特徴のミニチュアダックスフンド</p>
    <p class="bodyMsg">明るく、好奇心旺盛な性格をしています</p>
    <dogInfo jsonFileName = "miniature_dachshund.json"/>

  </div> 
</template>

<script>
import dogInfo from '@/components/dogInfo.vue'
export default {
  name: 'miniature_dachshund',
  components: {
    dogInfo
  }
}
</script>

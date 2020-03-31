<template>
  <div class="shih_tzu">
    <h1>シーズー</h1>
    <div class="cat_img">
      <img class="desc_img" alt="dog_shih_tzu" src="../assets/dog_shih_tzu.png">
    </div>
    <p class="bodyMsg">丸顔と垂れ耳が特徴のシーズー</p>
    <p class="bodyMsg">穏やかで賢く、大人しい性格をしています</p>
    <dogInfo jsonFileName = "shih_tzu.json"/>

  </div> 
</template>

<script>
import dogInfo from '@/components/dogInfo.vue'
export default {
  name: 'shih_tzu',
  components: {
    dogInfo
  }
}
</script>

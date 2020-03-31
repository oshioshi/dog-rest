<template>
  <div class="shibainu">
    <h1>柴犬</h1>
    <div class="cat_img">
      <img class="desc_img" alt="dog_shibainu_brown" src="../assets/dog_shibainu_brown.png">
    </div>
    <p class="bodyMsg">キリッとした顔立ちが特徴の柴犬</p>
    <p class="bodyMsg">賢く勇敢な性格で、飼い主に忠実です</p>
    <dogInfo jsonFileName = "shibainu.json"/>

  </div> 
</template>

<script>
import dogInfo from '@/components/dogInfo.vue'
export default {
  name: 'shibainu',
  components: {
    dogInfo
  }
}
</script>

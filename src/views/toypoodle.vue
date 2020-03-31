<template>
  <div class="toypoodle">
    <h1>トイプードル</h1>
    <div class="cat_img">
      <img class="desc_img" alt="dog_toypoodle_brown" src="../assets/dog_toypoodle_brown.png">
    </div>
    <p class="bodyMsg">ぬいぐるみのような見た目のトイプードル</p>
    <p class="bodyMsg">賢く愛情深い性格で、とても飼いやすい犬種です</p>
    <dogInfo jsonFileName = "toypoodle.json"/>
  
</div> 
</template>

<script>
import dogInfo from '@/components/dogInfo.vue'
export default {
  name: 'toypoodle',
  components: {
    dogInfo
  }
}
</script>

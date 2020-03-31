<template>
  <div class="puppy">
    <h1>里親募集</h1>
    <div class="cat_img">
      <img class="desc_img" alt="pet_dog_sleep" src="../assets/pet_dog_sleep.png">
    </div>
    <p class="bodyMsg">里親募集中の犬のTweetを集めました</p>
    <p class="bodyMsg">ぜひ覗いてみてください</p>
    <dogInfo jsonFileName = "puppy.json"/>


  </div> 
</template>

<script>
import dogInfo from '@/components/dogInfo.vue'
export default {
  name: 'puppy',
  components: {
    dogInfo
  }
}
</script>

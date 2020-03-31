<template>
  <div class="chihuahua">
    <h1>チワワ</h1>
    <div class="cat_img">
      <img class="desc_img" alt="dog_chihuahua_black_tan" src="../assets/dog_chihuahua_black_tan.png">
    </div>
    <p class="bodyMsg">超小型犬のチワワ</p>
    <p class="bodyMsg">明るく陽気で、甘えん坊な性格をしています</p>
    <dogInfo jsonFileName = "chihuahua.json"/>

  </div> 
</template>

<script>
import dogInfo from '@/components/dogInfo.vue'
export default {
  name: 'chihuahua',
  components: {
    dogInfo
  }
}
</script>

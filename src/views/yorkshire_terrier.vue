<template>
  <div class="yorkshire_terrier">
    <h1>ヨークシャーテリア</h1>
    <div class="cat_img">
      <img class="desc_img" alt="dog_yorkshire_terrier" src="../assets/dog_yorkshire_terrier.png">
    </div>
    <p class="bodyMsg">しなやかな直毛が特徴のヨークシャーテリア</p>
    <p class="bodyMsg">元気がよく活発で、愛情深い性格をしています</p>
    <dogInfo jsonFileName = "yorkshire_terrier.json"/>
    
  </div> 
</template>

<script>
import dogInfo from '@/components/dogInfo.vue'
export default {
  name: 'yorkshire_terrier',
  components: {
    dogInfo
  }
}
</script>

<template>
  <div class="shibainu">
    <h1>柴犬</h1>
    <div class="cat_img">
      <img class="desc_img" alt="dog_shibainu_brown" src="../assets/dog_shibainu_brown.png">
    </div>
    <p class="bodyMsg">キリッとした顔立ちが特徴の柴犬</p>
    <p class="bodyMsg">賢く勇敢な性格で、飼い主に忠実です</p>
    <dogInfo jsonFileName = "shibainu.json"/>

<div class="a8">
  <a href="https://px.a8.net/svt/ejp?a8mat=35SGE4+9H5EEQ+46DW+BXYE9" rel="nofollow"> 
  <img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=191124220573&wid=001&eno=01&mid=s00000019490002006000&mc=1"></a>
</div>

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

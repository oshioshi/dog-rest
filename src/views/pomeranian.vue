<template>
  <div class="pomeranian">
    <h1>ポメラニアン</h1>
    <div class="cat_img">
      <img class="desc_img" alt="dog_pomeranian" src="../assets/dog_pomeranian.png">
    </div>
    <p class="bodyMsg">小さな頭にふわふわな毛が特徴のポメラニアン</p>
    <p class="bodyMsg">活発でよく遊び、フレンドリーな性格をしています</p>
    <dogInfo jsonFileName = "pomeranian.json"/>

    <div class="a8">
      <a href="https://px.a8.net/svt/ejp?a8mat=35SGE4+9HQU0I+46HI+626XT" rel="nofollow">
      <img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=191124220574&wid=001&eno=01&mid=s00000019503001018000&mc=1"></a>
    </div>

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

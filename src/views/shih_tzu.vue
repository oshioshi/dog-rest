<template>
  <div class="shih_tzu">
    <h1>シーズー</h1>
    <div class="cat_img">
      <img class="desc_img" alt="dog_shih_tzu" src="../assets/dog_shih_tzu.png">
    </div>
    <p class="bodyMsg">丸顔と垂れ耳が特徴のシーズー</p>
    <p class="bodyMsg">穏やかで賢く、大人しい性格をしています</p>
    <dogInfo jsonFileName = "shih_tzu.json"/>

    <div class="a8">
      <a href="https://px.a8.net/svt/ejp?a8mat=35SGE4+9H5EEQ+46DW+BXYE9" rel="nofollow"> 
      <img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=191124220573&wid=001&eno=01&mid=s00000019490002006000&mc=1"></a>
    </div>
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

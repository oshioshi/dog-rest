<template>
  <div class="home">
    <h2>「いぬやすみ」では、Twitter上のいぬ画像を犬種ごとにお届けします</h2>
    
    <h3>↓さっそく癒される↓</h3>

    <div class="dogList">
      <router-link to="/toypoodle">
      <div class="dog_img">
        <img alt="dog_toypoodle_brown" src="../assets/dog_toypoodle_brown.png">
        <p>トイプードル</p>
      </div>
      </router-link>

      <router-link to="/chihuahua">
      <div class="dog_img">
      <img alt="dog_chihuahua_black_tan" src="../assets/dog_chihuahua_black_tan.png">
      <p>チワワ</p>
      </div>
      </router-link>

      <router-link to="/shibainu">
      <div class="dog_img">
      <img alt="dog_shibainu_brown" src="../assets/dog_shibainu_brown.png">
      <p>柴犬</p>
      </div>
      </router-link>

    </div>
    <div class="dogList">

      <router-link to="/pomeranian">
      <div class="dog_img">
      <img alt="dog_pomeranian" src="../assets/dog_pomeranian.png">
      <p>ポメラニアン</p>
      </div>
      </router-link>
  
      <router-link to="/miniature_dachshund">
      <div class="dog_img">
      <img alt="dog_miniature_dachshund" src="../assets/dog_miniature_dachshund.png">
      <p>ミニチュアダックスフンド</p>
      </div>
      </router-link>
   
      <router-link to="/corgi">
      <div class="dog_img">
      <img alt="dog_corgi" src="../assets/dog_corgi.png">
      <p>コーギー</p>
      </div>
      </router-link>

    </div>
    <div class="dogList">

      <router-link to="/shih_tzu">
      <div class="dog_img">
      <img alt="dog_shih_tzu" src="../assets/dog_shih_tzu.png">
      <p>シーズー</p>
      </div>
      </router-link>

      <router-link to="/yorkshire_terrier">
      <div class="dog_img">
      <img alt="dog_yorkshire_terrier" src="../assets/dog_yorkshire_terrier.png">
      <p>ヨークシャーテリア</p>
      </div>
      </router-link>

      <router-link to="/miniature_schnauzer">
      <div class="dog_img">
      <img alt="dog_miniature_schnauzer" src="../assets/dog_miniature_schnauzer.png">
      <p>ミニチュアシュナウザー</p>
      </div>
      </router-link>

    </div>
    <div class="dogList">
      
      <router-link to="/puppy">
      <div class="dog_img">
      <img alt="pet_dog_sleep" src="../assets/pet_dog_sleep.png">
      <p>里親募集</p>
      </div>
      </router-link>

      <router-link to="/contact">
      <div class="dog_img">
      <img alt="contact" src="../assets/animal_chara_computer_inu.png">
      <p>お問い合わせ</p>
      </div>
      </router-link>

      <div class="dog_img">
      <a href="https://cat-rest.com" target="_blank">
      <img alt="cat" src="../assets/akubi_cat.png">
      <p>ねこ派はこっち</p>
      </a>
      </div>

    </div>
    
  
  </div>
</template>

<style scoped>
h2 {
  margin: 60px 50px;
  font-size: 2.5rem;
}
p {
  margin: 10px 10px 10px;
  font-size: 2rem;
  
}
a {
  text-decoration: none;
}
h3 {
  margin: 60px 10px;
  font-size: 3rem;
}
.dogList {
  display: flex;
  justify-content:center;
}
img {
  max-height: 15rem;
  width: auto;
}
.dog_img {
    margin-top: 40px;
    margin-bottom: 40px;
    text-decoration: none;
    width: 300px;
}

@media screen and (max-width: 700px) { 
  h2 {
  margin: 50px 30px 50px;
  line-height: 1.8;
  font-size: 2rem;
}
h3 {
  margin: 70px 2px 50px;
  font-size: 2rem;
}
.dogList {
  display: flex;
  flex-direction: column;
  align-items: center;
}
}

</style>

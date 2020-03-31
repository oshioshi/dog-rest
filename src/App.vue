<template>
  <div id="app">
    <div id="top">
      <img id="topImg" alt="topImg" src="./assets/bed-animal-dog-dogs-57627.jpg">
      <p id="topMsg1">
      仕事やバイトで疲れているあなた。犬が好きなあなた。
      </p>
      <p id="topMsg2">
      いぬのツイートでも見て、癒されていきませんか？？
      </p>
      <div class="nav">
      
      <router-link to="/">
        <img class="logoImg" alt="いぬやすみ" src="./assets/logo_dogRest.png">
      </router-link>
      
      <span class="menuPc">
      <router-link class="menuitem" to="/toypoodle">
        <img class="menu_dog" alt="dog_toypoodle_brown" src="./assets/dog_toypoodle_brown.png">
      </router-link>
      <router-link class="menuitem" to="/chihuahua">
        <img class="menu_dog" alt="dog_chihuahua_black_tan" src="./assets/dog_chihuahua_black_tan.png">
      </router-link>
      <router-link class="menuitem" to="/shibainu">
        <img class="menu_dog" alt="dog_shibainu_brown" src="./assets/dog_shibainu_brown.png">
      </router-link>
      <router-link class="menuitem" to="/pomeranian">
        <img class="menu_dog" alt="dog_pomeranian" src="./assets/dog_pomeranian.png">
      </router-link>
      <router-link class="menuitem" to="/miniature_dachshund">
        <img class="menu_dog" alt="dog_miniature_dachshund" src="./assets/dog_miniature_dachshund.png">
      </router-link>
      <router-link class="menuitem" to="/corgi">
        <img class="menu_dog" alt="dog_corgi" src="./assets/dog_corgi.png">
      </router-link>
      <router-link class="menuitem" to="/shih_tzu">
        <img class="menu_dog" alt="dog_shih_tzu" src="./assets/dog_shih_tzu.png">
      </router-link>
      <router-link class="menuitem" to="/yorkshire_terrier">
        <img class="menu_dog" alt="dog_yorkshire_terrier" src="./assets/dog_yorkshire_terrier.png">
      </router-link>
      <router-link class="menuitem" to="/miniature_schnauzer">
        <img class="menu_dog" alt="dog_miniature_schnauzer" src="./assets/dog_miniature_schnauzer.png">
      </router-link>
      <router-link class="menuitem" to="/puppy">
        <img class="menu_dog" alt="pet_dog_sleep" src="./assets/pet_dog_sleep.png">
      </router-link>
      </span>

      <div class="menu-trigger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

      <div class="menuSp hiddenMenu">
        <ul class="menuUl">
          <li class="menuli"><router-link class="menuitem" to="/toypoodle">トイプードル</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/chihuahua">チワワ</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/shibainu">柴犬</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/pomeranian">ポメラニアン</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/miniature_dachshund">ミニチュアダックスフンド</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/corgi">コーギー</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/shih_tzu">シーズー</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/yorkshire_terrier">ヨークシャーテリア</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/miniature_schnauzer">ミニチュアシュナウザー</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/puppy">里親募集</router-link></li>
        </ul>
      </div>


    </div>
    
    <main>
      <router-view/>
    </main>
   

    <footer id="footer">
      <p>
      <small id="copy"></small>
      </p>
      <p class="made-by">made by 
        <a href="https://twitter.com/osshy_01" target="_blank">@osshy_01</a>
      </p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: 'mushin';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f4fffd;
}

.nav a {
  font-weight: bold;
}

.nav a.router-link-exact-active {
  color: #2c3e50;
}

body {
  margin:0px;
}

.menu_dog {
  max-height: 10vh;
  width: auto;
}

.menuUl {
  padding: 0px;
  margin: 0px;
  list-style: none;
}

.menuli {
  padding: 10px;
  
}

#top {
  height: 60vh;
  background-color: #ffb193;
  position: relative;
}

#topMsg1 {
  position: absolute;
  top: 1vh;
  left: 3vw;
  font-size: 2.5rem;
  max-width: 70vw;
  text-align: left;
  color: #fff;
  text-shadow: 1px 2px 3px #000;
  /* transform: rotate(-2deg); */
}

#topMsg2 {
  position: absolute;
  top: 35vh;
  left: 20vw;
  font-size: 2.5rem;
  text-align: left;
  color: #fff;
  text-shadow: 1px 2px 3px #000;
  /* transform: rotate(2deg); */
}

#topImg {
    width: 100vw;
    height: 50vh;
    object-fit: cover;
    object-position: 0% 55%;
}
.logoImg {
    width: 250px;
    height: auto;
    margin: 10px;
}
.nav {
  background-color: #ffb395;
  width: 100vw;
  height: 10vh;
  padding: 0px;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menuitem {
  color: #ffffff;
  font-size: 28px;
  text-decoration: none;
}

.menuSp {
  width: 100%;
  background-color: #ffb395;
  opacity: 0.95;
  transition:0.3s all ease 0s;
  z-index: 100;
  height: 100vh;
}

#footer {
  background-color: #ffb395;
  width: 100vw;
  height: 10vh;
  padding: 0px;
  display: table-cell;
  vertical-align: middle;
}

small {
  color: #ffffff;
  font-size: 18px;
}
.contact div{
  margin-bottom: 10px;
}

.fixed{
    position: fixed;
    top: 0;
    z-index: 100;
}

.fixedMenu {
    position: fixed;
    top: 10vh;
}

.hiddenMenu {
  opacity: 0;
  visibility: hidden;
  transition:0.3s all ease 0s;
  z-index: -10;
}

.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all .4s;
  box-sizing: border-box;
}
.menu-trigger {
  position: relative;
  width: 30px;
  height: 30px;
  margin: 20px;
}
.menu-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #fff;
  border-radius: 4px;
}
.menu-trigger span:nth-of-type(1) {
  top: 3px;
}
.menu-trigger span:nth-of-type(2) {
  top: 15px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}

.menu-trigger.active span:nth-of-type(1) {
  transform: translateY(12px) rotate(-45deg);
}
.menu-trigger.active span:nth-of-type(2) {
  opacity: 0;
}
.menu-trigger.active span:nth-of-type(3) {
  transform: translateY(-12px) rotate(45deg);
}

p.bodyMsg{
  margin: 10px 10px 10px;
  font-size: 1.3rem;  
  line-height: 1.8;
}

.a8 {
  margin-bottom: 15px;
}

.made-by a{
  text-decoration: none;
}

@media screen and (min-width: 1031px) { 
  .menu-trigger{
    display: none;
  }

}
@media screen and (max-width: 1030px) { 
  .menuPc {
  display:none; 
  }

}

@media screen and (max-width: 700px) { 
  #top {
  height: 50vh;
  background-color: #ffb395;
  position: relative;
  }
  #topImg {
    width: 100vw;
    height: 40vh;
    object-fit: cover;
    object-position: 15% 0%;
  }
  #topMsg1 {
  top: 1vh;
  left: 3vw;
  font-size: 1.6rem;
  max-width: 70vw;
  text-align: left;
  /* transform: rotate(-2deg); */
  }
#topMsg2 {
  top: 23vh;
  left: 35vw;
  font-size: 1.6rem;
  text-align: left;
  }
}
@media screen and (max-width: 330px) { 
  #topMsg1 {
  font-size: 1.5rem;
  }
  #topMsg2 {
  font-size: 1.5rem;
  }
}
</style>
<script>
import $ from 'jquery' 
export default {
mounted() {
  $('.menu-trigger').click(function() {
    $(this).toggleClass('active');
    $('.menuSp').toggleClass('hiddenMenu'); 
    });
  $('.menuSp .menuitem').click(function() {
    $('.menu-trigger').toggleClass('active');
    $('.menuSp').toggleClass('hiddenMenu'); 
  });
  $(window).on('scroll',function(){     
      if($(window).scrollTop() > $('#topImg').height()){
          $('.nav').addClass('fixed');   
          $('.menuSp').addClass('fixedMenu');   
      }
      else{
          $('.nav').removeClass('fixed');   
          $('.menuSp').removeClass('fixedMenu');   
      }
  });
  $(document).ready( function(){
    $('.logoImg').trigger('click');
    var now = new Date();
    var year = now.getFullYear();
    $('#copy').text('© '+ year + ' いぬやすみ');
  });
}
}    
</script>
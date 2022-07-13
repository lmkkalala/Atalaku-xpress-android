<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <img src="../../public/assets/img2.png">
        <p><small>Developper par </small> <a href="https://ctlcosarl.com" target="_black">CTLCo sarl</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import router from '@/router';
import { IonContent, IonPage} from '@ionic/vue';
import { defineComponent  } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonPage
  },
  methods:{
    redirect: function(location = ''){
      setTimeout(() => {  
        //window.location.href = location;
        router.push(location);
      }, 3000); 
    }
  },
  mounted() {
     // check if a file of the pos file configuration exist 
    const adminConfig = localStorage.getItem('adminConfig');
     // check if a pos owner is logged in
    const sessionLoginCeckConfig = localStorage.getItem('config'); 
    if(adminConfig == null){
      this.redirect('loginAdmin');
    }else if(sessionLoginCeckConfig == null){
      this.redirect('login');
    }else{
      this.redirect('login');
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container ion-icon{
  font-size: 30px;
}

#container img{
  border-radius: 50%;
  padding: 5px;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>

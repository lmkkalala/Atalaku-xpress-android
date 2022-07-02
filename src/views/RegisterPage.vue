<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>
            <img src="../../public/assets/bus-outline.svg" height="20"> 
          <strong style="font-size: 15px;"> Atalaku Xpress</strong>
          <a @click="Logout" id="logout">
            <img src="../../public/assets/log-out-outline.svg" height="20">
          </a>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="container" style="margin-top: 2%;">
        <strong style="color: #8cb3f4;">PAGE D'ENREGISTREMENT CARTE!</strong>
        <img src="../../public/assets/register-img.jpg">
        <div style="margin-left: 30px;margin-right:30px;text-align: center;">
          <p>Passer la carte pour pouvoir l'enregistrer dans le system Atalaku Xpress.</p>
        </div>
        <ion-card style="margin-left: 20px;margin-right:20px;">
          <form>
            <ion-item>
              <ion-input type="text" v-model="carte" name="carte" placeholder="Identifiant Carte" value="" readonly></ion-input>
            </ion-item>
          </form>
        </ion-card>
      </div>
    </ion-content>
        
    <ion-footer>
      <ion-toolbar>
        <ion-title style="text-align: center;"><small>Developper par <a href="https://ctlcosarl.com" target="_black">CTLCo sarl</a></small></ion-title>
      </ion-toolbar>
  </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonFooter, IonCard, IonItem, IonInput} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegisterPage',
  data(){
    return{
      config: [],
      phone: '',
      pin:'',
      posType:'',
      htmlContent:'',
      price: '',
      carte: '',
      session: false,
    }
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonCard,
    IonItem, 
    IonInput
  },
  methods: {
    configFile: function(){
       console.log('here'); 
    },
    Logout: function(){
        // localStorage.clear();
        this.session = false;
        window.location.href = 'login';
        return;
    }
  },
  mounted() {
    this.session = true;
    const exist = localStorage.getItem('adminConfig');
      if(exist == null){
        window.location.href = 'home';
        return;
      }
      
      if(exist == ''){
        localStorage.clear();
        window.location.href = 'home';
        return;
      }
      
      const config = JSON.parse(exist);
      
      this.phone = config.phone;
      this.pin = config.pin;
      this.posType = config.posType;

      if (this.posType == 'register'){
        console.log('register');
      }else{
          if(this.posType == 'recharge'){
              window.location.href = 'recharge';
          }else if(this.posType == 'payment'){
              window.location.href = 'pos';
          }
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
ion-input::part(placeholder) {
  color: #838888;
  opacity: 1;
}

#container img{
  padding: 2px;
  width: 250px;

}
#logout{
  margin-top: -0.5%;
  margin-right: 2%;
  position: fixed;
  top: 0%;
  right: 0%;
  cursor: pointer;
  z-index: 1000;
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

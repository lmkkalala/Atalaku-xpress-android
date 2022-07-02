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
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <img :src="photo">
        <p>Activer ou Desactiver <a :style={color} @click="allowModif"><ion-icon :icon="lockOpen" /></a></p>
        <form v-on:submit.prevent="modifyPrice">
          <ion-card style="margin-left: 50px; margin-right: 50px;">
              <ion-item>
                <ion-label style="color:#000;">Payer</ion-label>
                <ion-input type="number" v-model="price" name="price" id="price" value="500" required></ion-input>
                <strong> Fc</strong>
              </ion-item>
          </ion-card>
          <div style="margin-left: 50px; margin-right: 50px;">
            <ion-button type="submit" color="light" expand="full" size="default" name="change_prix" value="">Changer Prix</ion-button>
          </div>
        </form>
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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonFooter, IonCard, IonItem, IonInput, IonLabel, IonButton, IonIcon} from '@ionic/vue';
import { defineComponent } from 'vue';
import { lockOpen, lockClosed, bus} from 'ionicons/icons';

export default defineComponent({
  name: 'PosPage',
  data(){
    return{
      config: [],
      phone: '',
      pin:'',
      posType:'',
      htmlContent:'',
      price: '',
      html:'',
      session:'',
      color: 'green',
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
    IonInput,
    IonLabel,
    IonButton,
    IonIcon
  },
  setup(){
    return{
      lockOpen,lockClosed, bus,
      photo:'../../assets/qrcode.png',
    };
  },
  methods: {
    Logout: function(){
        //localStorage.clear();
        this.session = '';
        window.location.href = 'login';
        return;
    },
    allowModif: function(){
      this.color = this.color === 'green' ? 'black' : 'green';
      var price = document.getElementById('price');
      if(this.color == 'black'){
        price?.setAttribute('readonly','true');
      }else{
        price?.setAttribute('readonly','false');
      }
      console.log('allow Modification');
    },
    modifyPrice: function(){
      console.log("Modify Price");
    }
  },
  mounted() {
    this.session = '1234';
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
      // send a request to the server to get the price for this specific pos for the engin
      this.price = "500";

      if(this.posType == 'recharge'){
        console.log('recharge');
      }else if (this.posType == 'register'){
        console.log('register');
      }else if (this.posType == 'payment'){
        console.log('pos');
      }

      if(this.posType == 'payment'){
        console.log('Pos engin payment interface');
      }else{
          if(this.posType == 'register'){
              window.location.href = 'register';
          }else if(this.posType == 'recharge'){
              window.location.href = 'recharge';
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

#logout{
  margin-top: -0.5%;
  margin-right: 2%;
  position: fixed;
  top: 0%;
  right: 0%;
  cursor: pointer;
  z-index: 1000;
}

#container img{
  padding: 2px;
  width: 240px;
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

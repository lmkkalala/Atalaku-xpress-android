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
      <div id="container" style="margin-top: 7%;">
        <img src="../../public/assets/recharge-img.jpg">
        <h4 style="color: #8cb3f4; margin-top:-4%;">Page de recharge Cartes</h4>
        <small> Enregistrer Carte </small>
        <ion-card style="margin: 20px;">
          <form v-on:submit.prevent="rechargeCard">
            <ion-item>
              <ion-input type="text" v-model="carte" name="carte" placeholder="Identifiant Carte" value="" readonly required></ion-input>
            </ion-item>
            <ion-item>
              <ion-input type="text" v-model="amount" name="amount" placeholder="Montant a recharger" value="" required></ion-input>
            </ion-item>
            <ion-item>
              <ion-input type="text" v-model="valPin" name="valPin" placeholder="Pin de validation" value="" required></ion-input>
            </ion-item>
            <ion-button type="submit" Expand="full" size="default">Valider</ion-button>
          </form>
        </ion-card>
      </div>
    </ion-content>
        
    <ion-footer style="display:none;">
      <ion-toolbar>
        <ion-title></ion-title>
      </ion-toolbar>
  </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonFooter, IonCard, IonItem, IonInput, IonButton} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RechargePage',
  data(){
    return{
      config: [],
      phone: '',
      pin:'',
      posType:'',
      amount:'',
      valPin: '',
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
    IonInput,
    IonButton
  },
  methods: {
    rechargeCard: function(){
        console.log('Recharge Card Function'); 
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

      if(this.posType == 'recharge'){
        console.log('recharge');
      }else{
          if(this.posType == 'register'){
              window.location.href = 'register';
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
#logout{
  margin-top: -0.5%;
  margin-right: 2%;
  position: fixed;
  top: 0%;
  right: 0%;
  cursor: pointer;
  z-index: 1000;
}

ion-input::part(placeholder) {
  color: #838888;
  opacity: 1;
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

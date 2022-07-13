
<template>
  <ion-page>
    <ion-header :translucent="true" style="display: none;">
      <ion-toolbar>
        <ion-title>
            <img src="../../public/assets/bus-outline.svg" height="20"> 
            <strong style="font-size: 15px;"> Atalaku Xpress</strong>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="container" style="margin-top: -10%;">
        <img src="../../public/assets/icon/icon.png">
        <h4 style="color: #8cb3f4;margin-top:-20%;">ADMIN CONNEXION</h4>
        <small>{{message}}</small>
        <ion-card style="margin: 20px;">
          <form v-on:submit.prevent="LogIn">
            <ion-item>
              <ion-input type="text" v-model="username" name="username" placeholder="Utilisateur" value="" required></ion-input>
            </ion-item>
            <ion-item>
              <ion-input type="password" v-model="password" name="password" placeholder="Mot de Passe" value="" required></ion-input>
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
import router from '@/router';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonFooter, IonCard, IonItem, IonInput, IonButton} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginAdmin',
  data(){
    return{
      username:'',
      password:'',
      message:'Bienvenu',
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
    LogIn: function(){
       if(this.username == '+243996848331' && this.password == 'admin'){
            this.username = '';
            this.password = '';
            this.message = 'Connexion avec success';
            setTimeout(() => {
                //window.location.href = 'config';
                router.push('config');
            },3000);
       } else{
           this.message = 'Echec Connexion';
       }
        setTimeout(() => {  
          this.message = 'Bienvenu';
        }, 1500);
    }
  }, 
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

<template>
  <ion-page>
    <ion-header :translucent="true" style="display:none;" >
      <ion-toolbar>
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
  <ion-popover :is-open="false" :arrow="false">
  </ion-popover>
      <div id="container">
        <p>
          <img src="../../public/assets/bus-outline.svg" height="30">
          <strong style="color:#000;"> Configurer POS</strong>
          <br><small>{{message}}</small>
        </p>
        <form v-on:submit.prevent="addConfig">
        <ion-card>
            <ion-card-content>
                <ion-item>
                  <ion-label style="color:#d1734e;">Type</ion-label>
                </ion-item>
                <ion-item>
                    <ion-select v-model="posType" name="posType" placeholder="Selectionner" required>
                        <ion-select-option value="recharge">Recharge et voir solde Cartes</ion-select-option>
                        <ion-select-option value="payment">Engin payement</ion-select-option>
                        <ion-select-option value="register">Enregistrement Cartes</ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                  <ion-label style="color:#d1734e;">Bus ID</ion-label>
                </ion-item>
                <ion-item>
                    <ion-input type="text" v-model="bus_id" name="bus_id" placeholder="Bus ID" required></ion-input>
                </ion-item>
                <ion-item>
                  <ion-label style="color:#d1734e;">Bus SN</ion-label>
                </ion-item>
                <ion-item>
                    <ion-input type="text" v-model="bus_sn" name="bus_sn" placeholder="Bus SN" required></ion-input>
                </ion-item>
            </ion-card-content>
        </ion-card>
        <div style="margin-left: 10px; margin-right: 10px;">
            <ion-button type="submit" color="light" Expand="full" size="default">Enregistrer</ion-button>
        </div>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonItem,IonInput, IonSelect
, IonSelectOption, IonButton, IonCard, IonLabel, IonCardContent, IonPopover} from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'ConfigPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonCard,
    IonLabel,
    IonCardContent,
    IonPopover
  },
  data(){
    return{
      bus_id: '',
      posType:'',
      bus_sn:'',
      config:'',
      message: 'Bienvenu',
    }
  },
  methods: {
    redirect: function(location = ''){
      setTimeout(function(){  
        window.location.href = location;
      }, 3000);
    },
    addConfig: function(){
      const conf = localStorage.getItem('adminConfig');
      if(conf != null){
        let a = confirm('voulez-vouz modifier les donnees du POS');
        if (a == false) return;
      }
      const contentConfig = {
        'bus_id': this.bus_id,
        'posType': this.posType,
        'bus_sn': this.bus_sn,
      };
      localStorage.setItem('adminConfig',JSON.stringify(contentConfig));
      this.message = 'configuration Effectuer ...';
      this.bus_id = '';
      this.posType = '';
      this.bus_sn = '';
        setTimeout(() => {  
          this.message = 'Bienvenu';
        }, 1500);
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

ion-select::part(icon) {
  color: #971e49;
  opacity: 0;
}
ion-select::part(placeholder) {
  color: #838888;
  opacity: 1;
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

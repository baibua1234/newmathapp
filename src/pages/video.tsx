import { IonText, IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton,IonImg } from '@ionic/react';
import "./Video.css"
import youtube from '../assets/images/youtube.png'
const Video: React.FC = () => {
    return (
        <IonPage>
          <IonHeader>
                <IonToolbar style={{backgroundColor: '#DDBD69'}}>
                    
                <IonText>
                    <h1>วีดีโอสื่อการสอน</h1> 
                    <img src={youtube} alt="" width={"80"} height={"80"}  />             
                 </IonText>
            
                </IonToolbar>
            </IonHeader>
        
        </IonPage>
    );
};

export default Video;

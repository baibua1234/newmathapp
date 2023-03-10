import { IonText,IonCardContent, IonCardHeader, IonCardSubtitle, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCardTitle, IonCard, IonFooter, IonIcon, IonFab, IonFabButton, } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';
import "./Exercisetwo.css"
import four from '../assets/images/four.png'
import five2 from '../assets/images/five2.png'
import six from '../assets/images/six.png'
import backf from '../assets/images/backf.png'
import nextf from '../assets/images/nextf.png'
import book2 from '../assets/images/book2.png'

import {Link } from "react-router-dom"
import { add } from 'ionicons/icons';
const Exercisetwo: React.FC = () => {
    return (
    <div className='container-1'> 
        
        <IonPage>
            <IonHeader>
                <IonHeader>
                    <IonToolbar style={{backgroundColor: '#DDBD69'}}>
                <IonText>
                    <h1>แบบฝึกหัด</h1> 
                    <img src={book2} alt="" width="80" height="80"  />             
                </IonText>
            
                </IonToolbar>
            </IonHeader>

        </IonHeader>
            <IonCard style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                            <IonButton href='/number' fill='clear' color="dark">เครื่องหมายคณิตศาสตร์</IonButton>
                            <img src={four} alt=""  width={"30%"} height={"30%"}/>                             
                        </div>
                    </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <img src="video-chat.png" alt="" />
                </IonCardContent>
            </IonCard>

            <IonCard style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                    <div className='ion-text-center'>

                        <IonButton href='/numberPM' fill='clear' color="dark">เรขาคณิต</IonButton>
                        <img src={five2} alt=""  width={"30%"} height={"30%"}/> 
                    </div>
                    </IonCardTitle>

                </IonCardHeader>

                <IonCardContent>
                    <img src="" alt="" />
                </IonCardContent>
            </IonCard>

            <IonCard  className='card-footer' style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle >
                        <IonButton href='Game' fill='clear' color="dark">
                        <img  className='btn-back' src={backf} alt="" height={"50%"} width={"50%"}/>
                        <img  className='btn-next' src={nextf} alt="" height={"50%"} width={"50%"}/>
                        </IonButton>                                          
                    </IonCardTitle>
                </IonCardHeader>   
            </IonCard>
        </IonPage>
    </div>
                    
        
    );
};

export default Exercisetwo;

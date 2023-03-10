import { IonText,IonCardContent, IonCardHeader, IonCardSubtitle, IonHeader, IonPage, IonTitle, 
IonToolbar, IonButton, IonCardTitle, IonCard, IonFooter, IonIcon, IonFab, IonFabButton, } from '@ionic/react';
import "./Exercise.css"
import all from '../assets/images/one.png'
import ant from '../assets/images/two.png'
import cat from '../assets/images/three.png'
import backf from '../assets/images/backf.png'
import nextf from '../assets/images/nextf.png'
import book from '../assets/images/book.png'

import {Link } from "react-router-dom"
import { add } from 'ionicons/icons';
const Exercise: React.FC = () => {
    return (
    <div className='container-1'> 
        
        <IonPage>
            <IonHeader>
                <IonHeader>
                    <IonToolbar style={{backgroundColor: '#DDBD69'}}>
                <IonText>
                    <h1>แบบฝึกหัด</h1> 
                    <img src={book} alt="" width={"80"} height={"80"}  />             
                </IonText>
            
                </IonToolbar>
            </IonHeader>

        </IonHeader>
            <IonCard style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                            <IonButton href='/number' fill='clear' color="dark">การนับเลข</IonButton>
                            <img src={all} alt=""  width={"30%"} height={"30%"}/>                             
                        </div>
                    </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                
                </IonCardContent>
            </IonCard>

            <IonCard style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                    <div className='ion-text-center'>

                        <IonButton href='/numberPM' fill='clear' color="dark">บวกลบเลข</IonButton>
                        <img src={ant} alt=""  width={"30%"} height={"30%"}/> 
                    </div>
                    </IonCardTitle>

                </IonCardHeader>

                <IonCardContent>
                    <img src="" alt="" />
                </IonCardContent>
            </IonCard>

            <IonCard style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                            <IonButton href='/Matchnumber' fill='clear' color="dark">จับคู่ตามจำนวน</IonButton>
                            <img src={cat} alt=""  width={"30%"} height={"30%"}/> 
                        </div>
                    </IonCardTitle>
                </IonCardHeader>

            </IonCard>

            <IonCard  className='card-footer' style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle >
                        <IonButton href='Exercisetwo' fill='clear' color="dark">
                        <img  className='btn-back' src={backf} alt="" height={"80%"} width={"80%"}/>
                        <img  className='btn-next' src={nextf} alt="" height={"80%"} width={"80%"}/>
                        </IonButton>                                          
                    </IonCardTitle> 
                </IonCardHeader>   
            </IonCard>
        </IonPage>
    </div>
                    
        
    );
};

export default Exercise;

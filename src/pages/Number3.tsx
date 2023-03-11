import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton ,IonCardContent , IonCard , IonCardHeader,IonCardTitle} from '@ionic/react';
import num3 from '../assets/images/num3.png'
import five from '../assets/images/five.png'
import four from '../assets/images/four.png'
import six from '../assets/images/six.png'
import back from '../assets/images/back.png'
import next from '../assets/images/next.png'
import backarrow from '../assets/images/backarrow.png'
import { Redirect, Route, Link, useHistory } from 'react-router-dom';

import "./Number3.css"
const Number3: React.FC = () => {
    const history = useHistory();
    const selectChoice = async (e) => {
        console.log("Choice: ", typeof e.target.id)
        if (e.target.id == "6") {
            history.push('/Number4')
        } else {

        }
    }
    return (
        <IonPage>
             <IonCard style={{backgroundColor: '#DDBD69'}}>
            <div>
                {/* <div>
                    <img className='img-backarrow' src={backarrow} alt="" />       
                </div> */}

                <div className='ion-text-center'>
                    <p className='quiz'>3.รูปภาพมีไก่ทั้งหมดกี่ตัว</p>
                </div>
                
                <div className='ion-text-center'>
                    <img className='img-quiz' src={num3} alt="" />    
                </div>

                <div className='ion-text-center'> 
                    <p className='quiz select-answer'>เลือกคำตอบ</p>
                </div>
                
                <div className='wrap'>
                    <div className='bg-quiz'>
                    <img className='img-answer' onClick={selectChoice} id="4" src={four} alt="" />       
                </div>
                <div className='bg-quiz'>
                    <img className='img-answer' onClick={selectChoice} id="5" src={five} alt="" />       
                </div>
                <div className='bg-quiz'>
                    <img className='img-answer' onClick={selectChoice} id="6" src={six} alt="" />       
                </div>

                </div>
            </div>
            </IonCard>
            {/* button back and next */}
            <IonCard  className='card-footer' style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                    <IonButton href='Number4' fill='clear' color="dark">
                        <img  className='btn-back' src={back} alt="" height={"80%"} width={"80%"}/>
                        <img  className='btn-next' src={next} alt="" height={"80%"} width={"80%"}/>
                    </IonButton>                                          
                    </IonCardTitle>
                </IonCardHeader>                
            </IonCard>

            
      
        </IonPage>
    );
};

export default Number3;

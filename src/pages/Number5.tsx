import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCardContent, IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import num5 from '../assets/images/num5.png'
import four from '../assets/images/four.png'
import three from '../assets/images/three.png'
import two from '../assets/images/two.png'
import back from '../assets/images/back.png'
import next from '../assets/images/next.png'
import backarrow from '../assets/images/backarrow.png'
import { Redirect, Route, Link, useHistory } from 'react-router-dom';

import "./Number5.css"
const Number5: React.FC = () => {
    const history = useHistory();
    const selectChoice = async (e) => {
        console.log("Choice: ", typeof e.target.id)
        if (e.target.id == "2") {
            history.push('/Number5')
        } else {

        }
    }

    const handleClick = () => {
        history.push('/Exersie')
    };


    return (
        <IonPage>
            <IonCard style={{ backgroundColor: '#DDBD69' }}>
                <div>
                    {/* <div>
                    <img className='img-backarrow' src={backarrow} alt="" />       
                </div> */}

                    <div className='ion-text-center'>
                        <p className='quiz'>5.รูปภาพมีมะม่วงทั้งหมดกี่ลูก</p>
                    </div>

                    <div className='ion-text-center'>
                        <img className='img-quiz' src={num5} alt="" />
                    </div>

                    <div className='ion-text-center'>
                        <p className='quiz select-answer'>เลือกคำตอบ</p>
                    </div>

                    <div className='wrap'>
                        <div className='bg-quiz'>
                            <img className='img-answer' onClick={selectChoice} id="2" src={two} alt="" />
                        </div>
                        <div className='bg-quiz'>
                            <img className='img-answer' onClick={selectChoice} id="4" src={four} alt="" />
                        </div>
                        <div className='bg-quiz'>
                            <img className='img-answer' onClick={selectChoice} id="3" src={three} alt="" />
                        </div>

                    </div>
                </div>
            </IonCard>
            {/* button back and next */}
            <IonCard className='card-footer' style={{ backgroundColor: '#DDBD69' }}>
                <IonCardHeader>
                    <IonCardTitle>
                        <IonButton href='' fill='clear' color="dark">
                            <img className='btn-back' src={back} alt="" height={"80%"} width={"80%"} />
                            {/* <img  className='btn-next' src={next} alt="" height={"80%"} width={"80%"}/>                    */}
                        </IonButton>

                        <IonButton href='Exercise' fill='clear' color="dark">
                            <img className='btn-next' src={next} alt="" height={"80%"} width={"80%"} />
                        </IonButton>



                    </IonCardTitle>
                </IonCardHeader>
            </IonCard>



        </IonPage>
    );
};

export default Number5;

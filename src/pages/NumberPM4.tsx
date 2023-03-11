import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, } from '@ionic/react';
import pm4 from '../assets/images/pm4.png'
import five from '../assets/images/five.png'
import two from '../assets/images/two.png'
import three from '../assets/images/three.png'
import back from '../assets/images/back.png'
import next from '../assets/images/next.png'
import backarrow from '../assets/images/backarrow.png'
import { Redirect, Route, Link, useHistory } from 'react-router-dom';

const NumberPM4: React.FC = () => {
    const history = useHistory();
    const selectChoice = async (e) => {
        console.log("Choice: ", typeof e.target.id)
        if (e.target.id == "3") {
            history.push('/NumberPM5')
        } else {

        }
    }

    return (
        <IonPage>
            <IonCard style={{ backgroundColor: '#DDBD69' }}>
                <div>
                    <div>

                    </div>

                    <div className='ion-text-center'>
                        <p className='quiz'>4.จงหาผลลบแล้วเลือกคำตอบที่ถูกต้อง</p>
                    </div>

                    <div className='ion-text-center'>
                        <img className='img-quiz' src={pm4} alt="" />
                    </div>

                    <div className='ion-text-center'>

                    </div>

                    <div className='ion-text-center'>
                        <p className='quiz select-answer'>เลือกคำตอบ</p>
                    </div>

                    <div className='wrap'>
                        <div className='bg-quiz'>
                            <img className='img-answer' onClick={selectChoice} id="5" src={five} alt="" />
                        </div>
                        <div className='bg-quiz'>
                            <img className='img-answer' onClick={selectChoice} id="2" src={two} alt="" />
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
                    <IonButton href='NumberPM5' fill='clear' color="dark">
                        <img  className='btn-back' src={back} alt="" height={"80%"} width={"80%"}/>
                        <img  className='btn-next' src={next} alt="" height={"80%"} width={"80%"}/>
                    </IonButton>      

                    </IonCardTitle>
                </IonCardHeader>
            </IonCard>



        </IonPage>
    );
};

export default NumberPM4;

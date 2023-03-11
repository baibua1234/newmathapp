import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, } from '@ionic/react';
import pm1 from '../assets/images/pm1.png'
import seven from '../assets/images/seven.png'
import three from '../assets/images/three.png'
import two from '../assets/images/two.png'
import back from '../assets/images/back.png'
import next from '../assets/images/next.png'
import backarrow from '../assets/images/backarrow.png'
import { Redirect, Route, Link, useHistory } from 'react-router-dom';

const NumberPM: React.FC = () => {
    const history = useHistory();
    const selectChoice = async (e) => {
        console.log("Choice: ", typeof e.target.id)
        if (e.target.id == "7") {
            history.push('/NumberPM2')
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
                        <p className='quiz'>1.จงหาผลบวกแล้วเลือกคำตอบที่ถูกต้อง</p>
                    </div>

                    <div className='ion-text-center'>
                        <img className='img-quiz' src={pm1} alt="" />
                    </div>

                    <div className='ion-text-center'>

                    </div>

                    <div className='ion-text-center'>
                        <p className='quiz select-answer'>เลือกคำตอบ</p>
                    </div>

                    <div className='wrap'>
                        <div className='bg-quiz'>
                            <img className='img-answer' onClick={selectChoice} id="2" src={two} alt="" />
                        </div>
                        <div className='bg-quiz'>
                            <img className='img-answer' onClick={selectChoice} id="7" src={seven} alt="" />
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
                    <IonButton href='NumberPM2' fill='clear' color="dark">
                        <img  className='btn-back' src={back} alt="" height={"80%"} width={"80%"}/>
                        <img  className='btn-next' src={next} alt="" height={"80%"} width={"80%"}/>
                    </IonButton>            

                    </IonCardTitle>
                </IonCardHeader>
            </IonCard>



        </IonPage>
    );
};

export default NumberPM;

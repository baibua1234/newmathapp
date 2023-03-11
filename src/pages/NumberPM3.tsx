import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, } from '@ionic/react';
import pm3 from '../assets/images/pm3.png'
import nine from '../assets/images/nine.png'
import eight from '../assets/images/eight.png'
import six from '../assets/images/six.png'
import back from '../assets/images/back.png'
import next from '../assets/images/next.png'
import backarrow from '../assets/images/backarrow.png'
import { Redirect, Route, Link, useHistory } from 'react-router-dom';

const NumberPM2: React.FC = () => {
    const history = useHistory();
    const selectChoice = async (e) => {
        console.log("Choice: ", typeof e.target.id)
        if (e.target.id == "9") {
            history.push('/NumberPM4')
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
                        <p className='quiz'>3.จงหาผลบวกแล้วเลือกคำตอบที่ถูกต้อง</p>
                    </div>

                    <div className='ion-text-center'>
                        <img className='img-quiz' src={pm3} alt="" />
                    </div>

                    <div className='ion-text-center'>

                    </div>

                    <div className='ion-text-center'>
                        <p className='quiz select-answer'>เลือกคำตอบ</p>
                    </div>

                    <div className='wrap'>
                        <div className='bg-quiz'>
                            <img className='img-answer' onClick={selectChoice} id="9" src={nine} alt="" />
                        </div>
                        <div className='bg-quiz'>
                            <img className='img-answer' onClick={selectChoice} id="6" src={six} alt="" />
                        </div>
                        <div className='bg-quiz'>
                            <img className='img-answer' onClick={selectChoice} id="8" src={eight} alt="" />
                        </div>

                    </div>

                </div>

            </IonCard>
            {/* button back and next */}
            <IonCard className='card-footer' style={{ backgroundColor: '#DDBD69' }}>
                <IonCardHeader>
                    <IonCardTitle>
                    <IonButton href='NumberPM4' fill='clear' color="dark">
                        <img  className='btn-back' src={back} alt="" height={"80%"} width={"80%"}/>
                        <img  className='btn-next' src={next} alt="" height={"80%"} width={"80%"}/>
                    </IonButton>      

                    </IonCardTitle>
                </IonCardHeader>
            </IonCard>



        </IonPage>
    );
};

export default NumberPM2;

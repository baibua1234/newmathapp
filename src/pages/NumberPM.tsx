import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, } from '@ionic/react';
import pm1 from '../assets/images/pm1.png'

const NumberPM: React.FC = () => {
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

                    </div>
                    <div className='bg-quiz'>

                    </div>
                    <div className='bg-quiz'>

                    </div>

                </div>

            </IonCard>
            {/* button back and next */}
            <IonCard className='card-footer' style={{ backgroundColor: '#DDBD69' }}>
                <IonCardHeader>
                    <IonCardTitle>

                    </IonCardTitle>
                </IonCardHeader>
            </IonCard>



        </IonPage>
    );
};

export default NumberPM;

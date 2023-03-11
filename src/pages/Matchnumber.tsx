import { IonPage, IonHeader, IonImg, IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';

import "./Matchnumber.css"
const Matchnumber: React.FC = () => {
    return (
        <IonPage>
            <IonCard style={{ backgroundColor: '#DDBD69' }}>
                <div>
                    <div>

                    </div>

                    <div className='ion-text-center'>
                        <p className='quiz'>1.จับคู่จำนวนที่เท่ากัน</p>
                    </div>

                    <div className='ion-text-center'>

                    </div>

                    <div className='ion-text-center'>
                        <p className='quiz select-answer'>เลือกคำตอบ</p>
                    </div>

                    <div className='wrap'>

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

export default Matchnumber;
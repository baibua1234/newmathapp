import { IonCardContent, IonCardHeader,  IonHeader, IonPage, IonText, IonToolbar, IonButton, IonCardTitle, IonCard, IonImg } from '@ionic/react';
import "./Menu.css"
import exercise from '../assets/images/exercise.png'
import video from '../assets/images/video.png'
import game from '../assets/images/game.png'
import shapes from '../assets/images/shapes.png'
const Menu: React.FC = () => {
    return (
        
        <IonPage>
            <IonHeader>
                <IonToolbar style={{backgroundColor: '#DDBD69'}}>
                    
                <IonText>
                    <h1>MENU</h1> 
                    <img src={shapes} alt="" width={"80"} height={"80"}  />             
                 </IonText>
            
                </IonToolbar>
            </IonHeader>
            
            {/* item1 */}
            <IonCard className='card-data' href='/video' style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                     <IonText>
                        <h4 color="warning">วีดีโอสื่อการสอน</h4> 
                        <img src={video} alt="" width={"80"} height={"80"} />             
                    </IonText>                          
                        </div>
                    </IonCardTitle>
                </IonCardHeader>               
            </IonCard>

            {/* item2 */}
            <IonCard href='/exercise' style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                     <IonText>
                        <h3 color="warning">แบบฝึกหัด</h3> 
                      <img src={exercise} alt="" width={"80"} height={"80"}  />              
                    </IonText>                          
                        </div>
                    </IonCardTitle>
                </IonCardHeader>               
            </IonCard>

            {/* item3 */}
            <IonCard href='/game' style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                     <IonText>
                        <h2 color="warning">เกม</h2> 
                      <img src={game} alt="" width={"80"} height={"80"}   />             
                    </IonText>                          
                        </div>
                    </IonCardTitle>
                </IonCardHeader>               
            </IonCard>
            
        </IonPage>
    );
};

export default Menu;


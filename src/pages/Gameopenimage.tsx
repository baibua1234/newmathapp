import {
  IonPage,
  IonHeader,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonIcon,
  IonCardContent,
  IonCardSubtitle,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { heart, share } from "ionicons/icons";

import "./Gameopenimage.css";
const Gameopenimage: React.FC = () => {
  return (
    <IonPage>
      <IonCard style={{ backgroundColor: "#DDBD69" }}>

          <div className="ion-text-center">
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>1.มีรูปภาพเต่าทั้งหมดกี่ตัว</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
              <IonImg src={require('../assets/images/ttt.png')}></IonImg>
                <IonCardSubtitle>เลือกคำตอบ</IonCardSubtitle>
                <IonGrid>
                    <IonRow>
                    <IonCol>1</IonCol>
                    <IonCol>2</IonCol>
                    <IonCol>3</IonCol>
                    </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          </div>
      </IonCard>
      {/* button back and next */}
      <IonCard className="card-footer" style={{ backgroundColor: "#DDBD69" }}>
        <IonCardHeader>
          <IonCardTitle></IonCardTitle>
        </IonCardHeader>
      </IonCard>
    </IonPage>
  );
};

export default Gameopenimage;

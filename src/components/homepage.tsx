import './ExploreContainer.css';
import { IonImg } from '@ionic/react';
import { IonButton, IonText, IonTitle} from '@ionic/react';
import Teacher from "../assets/images/teacher.png"
interface ContainerProps { }
const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <img src={ Teacher } alt=""  />  
      <IonButton  fill="clear" href='/menu' size="large" color="light">
        <IonText class="text-center">
          MATH             
        </IonText>
      </IonButton>
    </div>
  
  );
};

export default ExploreContainer;

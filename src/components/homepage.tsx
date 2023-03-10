import './ExploreContainer.css';
import { IonImg } from '@ionic/react';
import { IonButton, IonText, IonTitle} from '@ionic/react';
import Teacher from "../assets/images/teacher.png"
interface ContainerProps { }
const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      {/* <IonImg src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  alt=""></IonImg> */}
      {/* <IonImg src='../assets/images/teacher.png'></IonImg> */}
      
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

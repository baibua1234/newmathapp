import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HomePage from '../components/homepage';
import './Home.css';
const Home: React.FC = () => {
  return (
    <IonPage>
        <HomePage />
      
    </IonPage>
  );
};

export default Home;

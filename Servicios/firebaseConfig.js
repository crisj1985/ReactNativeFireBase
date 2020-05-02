import firebase from 'firebase';
import "@firebase/firestore";
import "@firebase/storage";


export const cargarConfiguracion = () => {
    // if(!global.estaConfigurado){
    const firebaseConfig = {
        apiKey: "AIzaSyDu0xnHPjhHWTkwDmaMV5Tkb5Wp-iARNHY",
        authDomain: "navegacion-ba78e.firebaseapp.com",
        databaseURL: "https://navegacion-ba78e.firebaseio.com",
        projectId: "navegacion-ba78e",
        storageBucket: "navegacion-ba78e.appspot.com",
        messagingSenderId: "310426967233",
        appId: "1:310426967233:web:38162997ac4239f3c2c840",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    global.firestoreBD = firebase.firestore();
    global.firestoreStorage = firebase.storage();
    global.estaConfigurado = true;

    // }


}

// firebase.initializeApp(fileFireBaseConfig);
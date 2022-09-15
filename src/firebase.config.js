import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCOCsay8S0rwoTOTkDIc9dvJKIRv2P4_hE',
    authDomain: 'deliveryapp-62882.firebaseapp.com',
    databaseURL:
        'https://deliveryapp-62882-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'deliveryapp-62882',
    storageBucket: 'deliveryapp-62882.appspot.com',
    messagingSenderId: '703140014586',
    appId: '1:703140014586:web:bd77df34d63d5a56f4dc43',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

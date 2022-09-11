import { setDoc, doc } from 'firebase/firestore';
import { firestore } from '../firebase.config';

// Saving new Item

export const saveItem = async (data) => {
    await setDoc(
        doc(firestore, 'foodItems', `${Date.now()}`, data, { merge: true }),
        data,
        { merge: true },
    );
};

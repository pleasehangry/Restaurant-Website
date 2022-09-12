import {
    setDoc,
    doc,
    getDocs,
    collection,
    orderBy,
    query,
} from 'firebase/firestore';
import { firestore } from '../firebase.config';

// Saving new Item

export const saveItem = async (data) => {
    await setDoc(
        doc(firestore, 'foodItems', `${Date.now()}`, data, { merge: true }),
        data,
        { merge: true },
    );
};

// Get Detail food items

export const getAllFoodItems = async () => {
    const items = await getDocs(
        query(collection(firestore, 'foodItems'), orderBy('id', 'desc')),
    );
    return items.docs.map((docs) => doc.data());
};

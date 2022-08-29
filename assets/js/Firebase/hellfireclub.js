//imports
import app from '../Firebase/app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

//exports
export async function subscribeToHellfireClub(subscrition) {
    const db = getFirestore(app);
    const HfCcollection = collection(db, 'hellfire-club');
    const docRef = await addDoc(HfCcollection, subscrition);
    return docRef.id;
}
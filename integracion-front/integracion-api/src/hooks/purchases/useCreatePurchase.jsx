import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore'
import { dbFirebase } from "../../utils/firebaseConfig";

const useCreatePurchase = () => {
    const [error, setError] = useState(null)

    const createPurchase = async (purchaseData,) => {
        try {
            console.log({purchaseData}, "at hook")
            //la referencia de la base de datos es como el modelo
            const collectionRef = collection(dbFirebase, "purchases")
            // similar a un fetch con post
           const docRef = await addDoc(collectionRef, purchaseData)
           console.log({docRef})
            return docRef.id;
        } catch (error) {
            console.error(error, "Error when purchasing")
            setError(error)
        }
    }
   
    return { createPurchase, error }
}

export default useCreatePurchase;
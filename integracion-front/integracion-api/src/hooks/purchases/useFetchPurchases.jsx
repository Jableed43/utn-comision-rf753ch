import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { dbFirebase } from "../../utils/firebaseConfig";

function useFetchPurchases() {
    const [purchases, setPurchases] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect( () => {

        const fetchPurchases = async () => {
            
            try {
                //creamos una referencia a la coleccion de firebase llamada purchases
                const collectionRef = collection(dbFirebase, "purchases")
                //hacemos un get a firebase y esperamos la respuesta
                const querySnapshot = await getDocs(collectionRef)
                console.log({querySnapshot})
                const purchasesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                console.log(querySnapshot.docs)
                console.log({purchasesData})
                //seteamos las compras
                setPurchases(purchasesData)
                setLoading(false)
            } catch (error) {
                console.error(error, "Error fetching purchases")
                setError(error)
                setLoading(false)
            }
        }
        fetchPurchases()

    }, [])

    return { purchases, loading, error }
}

export default useFetchPurchases;
import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { dbFirebase } from "../../firebaseConfig";

function useFetchPurchases(userId) {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPurchases = async () => {
      if (!userId) {
        setLoading(false); // Si no hay usuario, terminamos la carga
        console.log(userId"No user ID provided");
        return;
      }
  
      try {
        const collectionRef = collection(dbFirebase, "compras");
        const userQuery = query(collectionRef, where("clientId", "==", userId));
        console.log("Running query with userId:", userId); // Imprime el ID del usuario
  
        const querySnapshot = await getDocs(userQuery);
        console.log("Query snapshot:", querySnapshot); // Imprime el snapshot
  
        const purchasesData = querySnapshot.docs.map((doc) => ({
          id: doc.id, // ID del documento
          ...doc.data(), // Datos del documento
        }));
  
        console.log("Purchases data:", purchasesData); // Verifica los datos obtenidos
  
        setPurchases(purchasesData);
        setLoading(false); // Finaliza la carga
      } catch (err) {
        console.error("Error fetching purchases:", err);
        setError(err.message);
        setLoading(false); // Finaliza la carga incluso si hay un error
      }
    };
  
    fetchPurchases();
  }, [userId]);
  

  return { purchases, loading, error };
}

export default useFetchPurchases;

import { collection, addDoc } from "firebase/firestore";
import { dbFirebase } from "../../firebaseConfig";

/**
 * Hook para crear una compra en Firestore.
 */
const useCreatePurchase = () => {
  const createPurchase = async (purchaseData) => {
    try {
      const collectionRef = collection(dbFirebase, "compras"); // Referencia a la colección "compras"
      const docRef = await addDoc(collectionRef, purchaseData); // Crea un nuevo documento
      return docRef.id; // Retorna el ID del documento creado
    } catch (error) {
      console.error("Error al crear la compra:", error);
      throw new Error("No se pudo crear la compra");
    }
  };

  return { createPurchase };
};

export default useCreatePurchase;

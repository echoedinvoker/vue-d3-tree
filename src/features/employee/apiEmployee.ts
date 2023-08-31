import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

export async function addEmployee(data: Employee) {
  console.log(data)
  const docRef = await addDoc(collection(db, 'employees'), data)

  return { ...data, id: docRef.id }
}


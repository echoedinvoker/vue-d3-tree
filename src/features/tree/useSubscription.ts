import { collection, onSnapshot } from "firebase/firestore";
import { ref, onMounted } from "vue";
import { db } from "../../firebase";

export function useSubscription() {
  const employees = ref<Employee[]>([])

  onMounted(() => {
    onSnapshot(collection(db, "employees"), (snapshot) => {

      snapshot.docChanges().forEach((change) => {
        const doc = { ...change.doc.data(), id: change.doc.id } as Employee
        const index = employees.value.findIndex(item => item.id === doc.id)

        switch (change.type) {
          case "added":
            employees.value.push(doc)
            break;
          case "modified":
            employees.value[index] = doc
            break;
          case "removed":
            employees.value.splice(index, 1)
            break;
          default:
            break;
        }
      });
    });
  })

  return { employees }
}

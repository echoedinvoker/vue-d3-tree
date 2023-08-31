import { useMutation } from "@tanstack/vue-query";
import { addEmployee as addEmployeeApi } from "./apiEmployee";
import { useToast } from "vue-toast-notification";

export function useAddEmployee() {
  const $toast = useToast()
  const { mutate: addEmployee, isLoading: isAdding } = useMutation({
    mutationFn: addEmployeeApi,
    onSuccess: (value) => {
      console.log(value)
      $toast.success('Success!')
    },
    onError: () => $toast.error('Failed!')
  })

  return { addEmployee, isAdding }
}

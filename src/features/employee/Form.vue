<template>
  <form @submit="handleSubmit">
    <TheHeading>
      Add New Employee
    </TheHeading>
    <!-- <div v-for="item in [ -->
    <!--     { id: 'name', placeholder: 'Employee Name', bind: newEmployee.name }, -->
    <!--     { id: 'text', placeholder: 'Report to...', bind: newEmployee.parent }, -->
    <!--     { id: 'department', placeholder: 'Department', bind: newEmployee.department }, -->
    <!--   ]"> -->
    <div>
      <input class="bg-transparent border-b border-amber-700 outline-none pt-2 placeholder:italic" 
        id="name" placeholder="Employee Name" v-model="newEmployee.name" />
    </div>
    <div>
      <input class="bg-transparent border-b border-amber-700 outline-none pt-2 placeholder:italic" 
        id="parent" placeholder="Report to..." v-model="newEmployee.parent" />
    </div>
    <div>
      <input class="bg-transparent border-b border-amber-700 outline-none pt-2 placeholder:italic" 
        id="department" placeholder="Department" v-model="newEmployee.department" />
    </div>
    <!-- </div> -->
    <div class="mt-6 text-end">
      <TheButton class="lowercase" :disabled="isAdding">Submit</TheButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAddEmployee } from './useAddEmployee';

const { addEmployee, isAdding } = useAddEmployee()
const newEmployee = reactive<Employee>({ name: '', parent: '', department: '' })

function handleSubmit(e: Event) {
  e.preventDefault()
  addEmployee(newEmployee)
}
</script>


<template>
  <div>
    <svg 
      :width="dims.width + margins.x * 2" 
      :height="dims.height + margins.y * 2"
    >
      <g class="graph" :transform="`translate(${margins.x},${margins.y})`">
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useSubscription } from './useSubscription';
import { useTreeSelection } from './useTreeSelection';

const dims = { height: 500, width: 1100 } 
const margins = { x: 50, y: 50 }

const { employees } = useSubscription()
useTreeSelection(employees.value, [dims.width, dims.height])

</script>


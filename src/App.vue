<template>
  <div>
    <ColorPicker
        :color-picker-options="colorPickerOptions"
        :initial-selected-color="initialSelectedColor"/>
  </div>
</template>

<script setup lang="ts">
import ColorPicker from "@/components/ColorPicker.vue";
// import Navbar from "@/components/Navbar.vue";
import {ref} from "vue";
      const colorPickerOptions = ref<string[]>(['#5d77f5', '#0fd085', '#ffba5b', '#f95e62', 'lightGreen'])
      const initialSelectedColor = ref<string>('#5d77f5')
</script>

<style lang="css">

</style>

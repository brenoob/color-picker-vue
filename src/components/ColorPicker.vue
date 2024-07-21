<template>
  <h1 :style="{ backgroundColor: selectedColor }">{{ title }}</h1>
  <div>
    <div class="canvas" :style="{ backgroundColor: selectedColor }">
      <p>{{ selectedColor }}</p>
    </div>

    <div class="selected-colors">
      <p>Selected Color:</p>
      <div
        v-for="color in colorPickerOptions"
        :class="{ selected: selectedColor === color }"
        :key="color"
        :style="{ backgroundColor: color }"
        @click="selectedColor = color"
      ></div>
    </div>
  </div>
  <div class="container-card">
    <CardComponent :style="{ backgroundColor: selectedColor }" v-for="e in 10" :key="e" />
  </div>
</template>

<script setup lang="ts">
import CardComponent from '../components/CardComponent.vue'
import { ref } from 'vue'

const props = defineProps({
  colorPickerOptions: {
    type: Array as () => Array<string>,
    required: true
  },
  initialSelectedColor: {
    type: String,
    required: true
  }
})

const selectedColor = ref(props.initialSelectedColor)

const title = ref<string>('Color Picker')
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.selected-colors {
  width: 150px;
  font-size: x-small;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid rgb(161, 161, 161);
  border-radius: 4px;
}

.canvas,
.color-box {
  margin: 20px;
  border: 1px solid rgb(161, 161, 161);
}
.canvas {
  width: 100px;
  height: 100px;
  margin-bottom: 55px;
  transition: background-color 0.3s ease-in-out;
  position: relative;
  border-radius: 50%;
}

.canvas p {
  font-size: 0.8em;
  position: absolute;
  bottom: 4px;
  width: 60%;
  background: rgba(255, 255, 255, 0.6);
  left: 35%;
  font-style: italic;
  text-align: center;
}

.color-box {
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
}

.color-box::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 5px solid black;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  will-change: opacity;
}

.color-box.selected::after {
  opacity: 1;
}

.container-card {
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
}

@media only screen and (max-width: 992px) {
  .container-card {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
}
</style>

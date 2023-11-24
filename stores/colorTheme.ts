import { defineStore } from "pinia";

export const useColorStore = defineStore("color", () => {
    const color = localStorage.getItem('color-theme')
    console.log(color)

  const currentColor = ref('light');

  function changeColor() {
    if (localStorage.getItem('color-theme') === 'light') {
        currentColor.value = 'light'
    } else {
        currentColor.value = 'dark'
    }
  }

  return {
    currentColor,
    changeColor
  };
});

interface Category {
  id: number;
  name: string;
}

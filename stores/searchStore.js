import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSearchStore = defineStore('search', () => {
  const isSearchOpen = ref(false);

  const toggleSearch = () => {
    isSearchOpen.value = !isSearchOpen.value;
  };

  const closeSearch = () => {
    isSearchOpen.value = false;
  };

  return { isSearchOpen, toggleSearch, closeSearch };
}); 
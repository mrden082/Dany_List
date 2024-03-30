import { create } from "zustand";

type Anime = {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  label: string;
};

type StoreState = {
  favoriteAnime: Anime[];
  plannedAnime: Anime[];
  watchedAnime: Anime[];
};

export const useStore = create<StoreState>((set) => {
  const storedState = localStorage.getItem("storeState");

  const initialState: StoreState = storedState
    ? JSON.parse(storedState)
    : {
        favoriteAnime: [],
        plannedAnime: [],
        watchedAnime: [],
      };

  set(initialState);

  return {
    favoriteAnime: initialState.favoriteAnime,
    plannedAnime: initialState.plannedAnime,
    watchedAnime: initialState.watchedAnime,
    addToFavorite: (anime: Anime) => {
      set((state) => ({
        favoriteAnime: [...state.favoriteAnime, anime],
      }));
    },
    addToPlanned: (anime: Anime) => {
      set((state) => ({
        plannedAnime: [...state.plannedAnime, anime],
      }));
    },
    addToWatched: (anime: Anime) => {
      set((state) => ({
        watchedAnime: [...state.watchedAnime, anime],
      }));
    },
  };
});

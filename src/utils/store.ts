import create from "zustand";

type Anime = {
  id: number;
  title: string;
  label: string;
};

type StoreState = {
  favoriteAnime: Anime[];
  plannedAnime: Anime[];
  watchedAnime: Anime[];
};

export const useStore = create<StoreState>(() => ({
  favoriteAnime: [],
  plannedAnime: [],
  watchedAnime: [],
}));

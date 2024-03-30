export default interface Media {
  title: {
    romaji: string;
  };
  characters: {
    nodes: {
      name: {
        full: string;
      };
    }[];
  };
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number;
    month: number;
    day: number;
  };
  status: string;
  description: string;
  episodes: number;
}


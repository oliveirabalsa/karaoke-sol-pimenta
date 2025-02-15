export type Song = {
  code: string;
  title: string;
  artist: string;
  genre?: string; // TODO: remove optionals
  lyrics?: string;
  originalCountry?: string;
};

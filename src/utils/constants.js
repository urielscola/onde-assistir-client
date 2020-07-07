export const MENU_ITEMS = [
  {
    label: 'Catálogo',
    link: '/catalogo',
  },
  {
    label: 'Filmes',
    link: '/catalogo?type=movie',
  },
  {
    label: 'Séries',
    link: '/catalogo?type=serie',
  },
  {
    label: 'Animes',
    link: '/catalogo?tags=Anime',
  },
];

export const TAGS = [
  'Comédia',
  'Família',
  'Ficção Científica',
  'Animação',
  'Documentário',
  'Drama',
  'História',
  'Crime',
  'Guerra',
  'Militar',
  'Made in Europe',
  'Fantasia',
  'Romance',
  'Mistério',
  'Thriller',
  'Terror',
  'Ação',
  'Aventura',
  'Música',
  'Musical',
  'Western',
  'Esporte',
  'Fitness',
  'Anime',
  'Reality TV',
];

export const TAGS_OPTIONS = TAGS.map(tag => ({ label: tag, value: tag }));

export const TYPES = [
  { label: 'Filme', value: 'movie' },
  { label: 'Série', value: 'serie' },
];

export const SOURCES_OPTIONS = [
  { value: 'Netflix', path: 'logos/netflix.jpg' },
  { value: 'Amazon Prime Video', path: 'logos/primevideo.jpg' },
  { value: 'Claro video', path: 'logos/clarovideo.png' },
  { value: 'Crunchyroll', path: 'logos/crunchyroll.png' },
  { value: 'Globo Play', path: 'logos/globoplay.png' },
  { value: 'Fox Play', path: 'logos/foxplay.jpg' },
  { value: 'Fox Premium', path: 'logos/foxpremium.png' },
  { value: 'Telecine Play', path: 'logos/telecine-play.jpg' },
  { value: 'HBO Go', path: 'logos/hbo-go.png' },
];

export const ALLOWED_SOURCES = [
  'Amazon Prime Video',
  'Netflix',
  'Claro Video',
  'Crunchyroll',
  'Globo Play',
  'Fox Play',
  'Fox Premium',
  'Telecine Play',
  'HBO Go',
];

export const PRICING = {
  'Amazon Prime Video': 9.99,
  Netflix: 21.9,
  'Claro Video': 19.9,
  Crunchyroll: 25,
  'Globo Play': 19.9,
  'Fox Play': 24.9,
  'Fox Premium': 24.9,
  'Telecine Play': 37.9,
  'HBO Go': 34.9,
};

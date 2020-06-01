export const MENU_ITEMS = [
  {
    label: 'Catálogo',
    link: '/catalogo',
  },
  {
    label: 'Contato',
    link: '/contato',
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
  { value: 'Claro Video', path: 'logos/clarovideo.png' },
  { value: 'Crunchyroll', path: 'logos/crunchyroll.png' },
  { value: 'Globo Play', path: 'logos/globoplay.png' },
  { value: 'Fox Play', path: 'logos/foxplay.jpg' },
  { value: 'Fox Premium', path: 'logos/foxpremium.png' },
  { value: 'Telecine Play', path: 'logos/telecine-play.jpg' },
  { value: 'HBO Go', path: 'logos/hbo-go.png' },
];

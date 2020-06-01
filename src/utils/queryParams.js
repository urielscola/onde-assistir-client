import qs from 'query-string';

export const getQuery = () => {
  const q = qs.parse(window.location.search, { arrayFormat: 'comma' });

  if (q.tags && typeof q.tags === 'string') q.tags = [q.tags];
  if (q.sources && typeof q.sources === 'string') q.sources = [q.sources];
  if (q.type && typeof q.type === 'string') q.type = [q.type];

  return q;
}

export const buildQuery = query => qs.stringify(query, { skipNull: true, arrayFormat: 'comma' });

export const clearObject = obj => {
  const clearedObject = {};

  Object.keys(obj).forEach(key => {
    if (obj[key]) clearedObject[key] = obj[key];
  });

  return clearedObject;
};

export const replaceQueryParams = params =>
  window.history.replaceState(
    null,
    '',
    `${window.location.pathname}?${buildQuery(params)}`
  );

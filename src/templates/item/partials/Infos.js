import React from 'react';
import { LabelValue } from 'src/components';

const Infos = ({ payload }) => (
  <>
    {payload.seasons && (
      <LabelValue
        label="TEMPORADAS"
        value={payload.seasons}
      />
    )}
    {payload.runtime && (
      <LabelValue
        label="DURAÇÃO"
        value={payload.runtime}
      />
    )}
    {payload.tags && payload.tags.length > 0 && (
      <LabelValue
        isTags
        label="TAGS"
        value={payload.tags.join(', ')}
      />
    )}

    {payload.cast && payload.cast.length > 0 && (
      <LabelValue
        isTags
        label="ELENCO"
        value={payload.cast.join(', ')}
      />
    )}
  </>
);

export default Infos;

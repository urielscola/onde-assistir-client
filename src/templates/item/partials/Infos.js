import React from 'react';
import { LabelValue } from 'src/components';
import { minutesToHours } from 'src/utils';

const Infos = ({ payload }) => (
  <>
    {payload.seasons && (
      <LabelValue
        label="Temporadas"
        value={payload.seasons}
      />
    )}
    {payload.runtime && (
      <LabelValue
        label="Duração"
        value={minutesToHours(payload.runtime)}
      />
    )}
    {payload.tags && payload.tags.length > 0 && (
      <LabelValue
        isTags
        label="Categorias"
        value={payload.tags.map(tag => <span>{tag}</span>)}
      />
    )}

    {/* {payload.cast && payload.cast.length > 0 && (
      <LabelValue
        isTags
        label="ELENCO"
        value={payload.cast.join(', ')}
      />
    )} */}
  </>
);

export default Infos;

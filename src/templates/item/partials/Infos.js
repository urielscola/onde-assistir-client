import React from 'react';
import { LabelValue } from 'src/components';

const Infos = ({ payload }) => (
  <>
    {payload.seasons && (
      <LabelValue
        label="TEMPORADAS"
        value={payload.seasons}
        color={payload.theme}
      />
    )}
    {payload.runtime && (
      <LabelValue
        label="DURAÇÃO"
        value={payload.runtime}
        color={payload.theme}
      />
    )}
    {payload.tags.length > 0 && (
      <LabelValue
        isTags
        label="TAGS"
        color={payload.theme}
        value={payload.tags.join(', ')}
      />
    )}
  </>
);

export default Infos;

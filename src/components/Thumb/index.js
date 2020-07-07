import React from 'react';
import { Link } from 'gatsby';
import { Image, Icon, PlayButton } from '../index';
import * as Styles from './styles';
import noImage from 'src/assets/images/no-cover.png';

const Thumb = ({ thumb, showInfo = true }) => {
  const item = thumb.node || thumb;
  const [id] = item.cover ? item.cover.split('.') : [null];
  const image = id ? 'https://dfn8uuw9d31r.cloudfront.net/' + item.cover : noImage;
  const placeholder = id ? 'https://dfn8uuw9d31r.cloudfront.net/' + id + '_thumb.png' : noImage;
  // const sources = typeof item.sources === 'number' ? item.sources : item.sources.length;

  return (
    <Styles.Container>
      <Link to={'/' + item.slug} title={item.title}>
        <Image
          src={image}
          placeholder={placeholder}
          alt={item.title}
        />
        {showInfo && (
          <Styles.Infos>
            <Styles.Title>{item.title}</Styles.Title>
            <PlayButton title="Onde Assistir" />
            <Styles.Tags>
              {item.tags.slice(0, 3).join(', ')}
            </Styles.Tags>

          </Styles.Infos>
        )}
      </Link>
    </Styles.Container>
  );
};

export default Thumb;

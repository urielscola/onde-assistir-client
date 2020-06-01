import React from 'react';
import { Link } from 'gatsby';
import { Icon } from 'src/components';
import * as Styles from './styles';


const Breadcrumb = ({ items }) => (
  <div>
    <Styles.List>
      {[{ label: 'Início', path: '/' }, ...items].map(item => item.path ? (
        <li key={item.label}>
          <Link to={item.path} title={item.label}>
            {item.label}
          </Link>
          <Icon variant="arrow-right" color="#fff" size={16} />
        </li>
      ) : (<li key={item.label}><p>{item.label}</p></li>))}
    </Styles.List>
  </div>
)

export default Breadcrumb;
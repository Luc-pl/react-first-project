import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';

const SearchResults = ({title, cards, icon}) => (
  <section className={styles.component}>
    <Container>
      <h3 className={styles.title}>{title}
        <span className={styles.icon}>
          <Icon name={icon} />
        </span>
      </h3>
      <div className={styles.cards}>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </Container>
  </section>
);

SearchResults.defaultProps = {
  icon: settings.defaultColumnIcon,
  title: 'Search Results',
};

SearchResults.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  cards: PropTypes.array,
};

export default SearchResults; 
import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
//import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import {listData, settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    source: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
    source: listData.image,
  }

  render() {
    const {title, image, description, columns} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
        */}
      </section>
    );
  }
}

export default List;

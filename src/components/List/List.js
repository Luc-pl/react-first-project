import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    source: PropTypes.string.isRequired,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSource={this.props.source}/>
        <div className={styles.description}>{ReactHtmlParser(this.props.description)}</div>
        <div className={styles.columns}>
          <Column title='First' />
          <Column title='Second' />
          <Column title='Third' />
        </div>
      </section>
    )
  }
}

export default List;

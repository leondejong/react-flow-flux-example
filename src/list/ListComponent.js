// @flow

import React from 'react';

import { Record, Map } from 'immutable';

import ListItems from './ListItemsComponent';
import ListSave from './ListSaveComponent';

import './list.css';

type Props = {
  items: Map<string, Record<Object>>,
  addItem: (name: string) => void,
  updateItem: (id: string, name: string) => void,
  removeItem: (id: string) => void,
};

class List extends React.Component<Props> {
  render(): ?React$Element<any> {
    return (
      <section className="list">
        <ListItems
          items={ this.props.items }
          updateItem={ this.props.updateItem }
          removeItem={ this.props.removeItem } />
        <ListSave
          addItem={ this.props.addItem } />
      </section>
    );
  }
}

export default List;

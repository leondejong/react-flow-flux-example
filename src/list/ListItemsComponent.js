// @flow

import React from 'react';

import { Record, Map } from 'immutable';

import ListSave from './ListSaveComponent';
import ListRemove from './ListRemoveComponent';

type Props = {
  items: Map<string, Record<Object>>,
  updateItem: (id: string, name: string) => void,
  removeItem: (id: string) => void,
};

class ListItems extends React.Component<Props> {
  render(): ?React$Element<any> {
    return (
      <ul className="list__items">{
        [...this.props.items.values()].map((item) =>
          <li className="list__item" key={ item.id }>
            <ListSave
              id={ item.id }
              name={ item.name }
              updateItem={ this.props.updateItem } />
            <ListRemove
              id={ item.id }
              removeItem={ this.props.removeItem } />
          </li>
        )
      }</ul>
    );
  }
}

export default ListItems;

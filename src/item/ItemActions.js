// @flow

import ItemActionTypes from './ItemActionTypes';
import ItemDispatcher from './ItemDispatcher';

const Actions: Object = {
  addItem(name: string): void {
    ItemDispatcher.dispatch({
      type: ItemActionTypes.ADD_ITEM,
      name,
    });
  },
  updateItem(id: string, name: string): void {
    ItemDispatcher.dispatch({
      type: ItemActionTypes.UPDATE_ITEM,
      id,
      name,
    });
  },
  removeItem(id: string): void {
    ItemDispatcher.dispatch({
      type: ItemActionTypes.REMOVE_ITEM,
      id,
    });
  },
};

export default Actions;

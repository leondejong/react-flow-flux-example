// @flow

import { ReduceStore } from 'flux/utils';

import { Record, Map } from 'immutable';

import Item from './Item';
import ItemActionTypes from './ItemActionTypes';
import ItemDispatcher from './ItemDispatcher';
import ItemData from './ItemData';

class ItemStore extends ReduceStore<Map<string, Record<Object>>> {
  constructor() {
    super(ItemDispatcher);
  }

  getInitialState(): Map<string, Record<Object>> {
    return ItemData.getState();
  }

  reduce(state: Map<string, Record<Object>>, action: Object): Map<string, Record<Object>> {
    switch (action.type) {
      case ItemActionTypes.ADD_ITEM:
        return this.addItem(state, action);
      case ItemActionTypes.UPDATE_ITEM:
        return this.updateItem(state, action);
      case ItemActionTypes.REMOVE_ITEM:
        return this.removeItem(state, action);
      default:
        return state;
    }
  }

  addItem(state: Map<string, Record<Object>>, action: Object): Map<string, Record<Object>> {
    if (!action.name) return state;
    const id = ItemData.generateId();
    state = state.set(
      id, new Item({
        id, name: action.name
      })
    );
    state = state.sortBy(item => item.name);
    ItemData.setState(state);
    return state;
  }

  updateItem(state: Map<string, Record<Object>>, action: Object): Map<string, Record<Object>> {
    state = state.setIn([action.id, 'name'], action.name);
    state = state.sortBy(item => item.name);
    ItemData.setState(state);
    return state;
  }

  removeItem(state: Map<string, Record<Object>>, action: Object): Map<string, Record<Object>> {
    state = state.delete(action.id);
    ItemData.setState(state);
    return state;
  }
}

export default new ItemStore();

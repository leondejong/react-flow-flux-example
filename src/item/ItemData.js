// @flow

import { fromJS, Record, Map } from 'immutable';

import Item from './Item';

const key: string = 'item-list';

class ItemData {
  static getState(): Map<string, Record<Object>> {
    let data: Object = JSON.parse(String(localStorage.getItem(key)));
    let state: Map<string, Record<Object>> = fromJS(data, (key, value) => {
      return key === '' ? value.toMap() : new Item(value);
    });
    return state ? state.sortBy(item => item.name) : Map();
  }

  static setState(state: Map<string, Record<Object>>): void {
    localStorage.setItem(key, JSON.stringify(state.toJS()));
  }

  static removeState(): void {
    localStorage.removeItem(key);
  }

  static generateId(): string {
    return Math.random().toString(36).substr(2, 8);
  }
}

export default ItemData;

// @flow

import { Container } from 'flux/utils';

import AppView from './AppView';

import ItemActions from '../item/ItemActions';
import ItemStore from '../item/ItemStore';

const getStores = (): Array<any> => {
  return [
    ItemStore,
  ];
}

const getState = (): Object => {
  return {
    items: ItemStore.getState(),
    addItem: ItemActions.addItem,
    updateItem: ItemActions.updateItem,
    removeItem: ItemActions.removeItem,
  };
}

export default Container.createFunctional(AppView, getStores, getState);

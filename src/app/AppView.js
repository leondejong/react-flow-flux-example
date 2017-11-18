// @flow

import React from 'react';

import { Record, Map } from 'immutable';

import Layout from '../layout/LayoutComponent';

type Props = {
  items: Map<string, Record<Object>>,
  addItem: (name: string) => void,
  updateItem: (id: string, name: string) => void,
  removeItem: (id: string) => void,
};

const AppView = (props: Props): ?React$Element<any> => {
  return (
    <Layout { ...props } />
  );
}

export default AppView;

// @flow

import React from 'react';

import { Record, Map } from 'immutable';

import List from '../list/ListComponent';

import './layout.css';

type Props = {
  items: Map<string, Record<Object>>,
  addItem: (name: string) => void,
  updateItem: (id: string, name: string) => void,
  removeItem: (id: string) => void,
};

class Layout extends React.Component<Props> {
  title: string;
  currentYear: () => number;

  constructor(props: Props) {
    super(props);
    this.title = 'React Flow Flux Example';
    this.currentYear = this.currentYear.bind(this);
  }

  currentYear(): number {
    return new Date().getFullYear();
  }

  render(): ?React$Element<any> {
    return (
      <section className="layout">
        <header className="layout__header">
          <h1 className="layout__title">
            { this.title }
          </h1>
        </header>
        <main className="layout__content">
          <List
            className="layout__list"
            items={ this.props.items }
            addItem={ this.props.addItem }
            updateItem={ this.props.updateItem }
            removeItem={ this.props.removeItem } />
        </main>
        <footer className="layout__footer">
          { this.currentYear() }
        </footer>
      </section>
    );
  }
}

export default Layout;

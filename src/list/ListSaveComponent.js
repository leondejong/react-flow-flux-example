// @flow

import React from 'react';

type Props = {
  id?: string,
  name?: string,
  addItem?: (name: string) => void,
  updateItem?: (id: string, name: string) => void,
};

type State = {
  name: string,
  saving: boolean,
};

class ListSave extends React.Component<Props, State> {
  exists: boolean;

  handleInputChange: (event: SyntheticInputEvent<HTMLInputElement>) => void;
  handleInputKeyDown: (event: SyntheticInputEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;

  constructor(props: Props) {
    super(props);
    // Explicit conversion for flow
    this.exists = !!(this.props.id && this.props.name);
    this.state = {
      name: this.exists ? this.props.name || '' : '',
      saving: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  addItem(name?: string): void {
    name = name || this.state.name;
    if (name && this.props.addItem) {
      this.props.addItem(name);
      this.setState(prevState => ({ name: '' }));
    }
  }

  updateItem(id?: string, name?: string): void {
    id = id || this.props.id;
    name = name || this.state.name;
    if (id && name && this.props.updateItem) {
      this.props.updateItem(id, name);
    }
  }

  saveItem(): void {
    if (this.exists) {
      this.updateItem();
    } else {
      this.addItem();
    }
  }

  flashButton() {
    this.setState(prevState => ({ saving: true }));
    setTimeout(() => {
      this.setState(prevState => ({ saving: false }));
    }, 200);
  }

  handleInputChange(event: SyntheticInputEvent<HTMLInputElement>): void {
    const value = event.target.value;
    this.setState(prevState => ({ name: value }));
  }

  handleInputKeyDown(event: SyntheticInputEvent<HTMLInputElement>): void {
    if (event.keyCode === 13) { // On the enter key
      this.saveItem();
      this.flashButton();
    }
  }

  handleButtonClick(): void {
    this.saveItem();
  }

  render(): ?React$Element<any> {
    const buttonClass = 'list__button button'
      + (this.state.saving ? ' button--active' : '');
    return (
      <span className="list__save">
        <input
          className="list__input-text input-text"
          autoFocus={ true }
          placeholder="Item Name"
          value={ this.state.name }
          onChange={ this.handleInputChange }
          onKeyDown={ this.handleInputKeyDown } />
        <button
          className={ buttonClass }
          onClick={ this.handleButtonClick }>
          { this.exists ? 'Update' : 'Add' }
        </button>
      </span>
    );
  }
}

export default ListSave;

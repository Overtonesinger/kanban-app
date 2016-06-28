import React from 'react';
import Base from './BaseComponent';  // this._bind() ....... the "mass-binder"

export default ({editing, value, onEdit, ...props}) => {
  if (editing) {
    return <Edit value={value} onEdit={onEdit} {...props} />;
  }

  return <span {...props}>{value}</span>;
}


class Edit extends Base {
  render() {
    const {value, ...props} = this.props;

    return <input
      type="text"
      autoFocus={true}
      defaultValue={value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter}
      {...props} />;
  }
  /* ------------wrong syntax-highlight STOPPER!------------- */

  checkEnter = (e) => {
    if (e.key==='Enter')
    {
      this.finishEdit(e);
    }
  }

  finishEdit = (e) => {
    const value = e.target.value;

    if (this.props.onEdit)
    {
      this.props.onEdit(value);
    }
  }
}

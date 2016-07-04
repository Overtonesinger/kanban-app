import React from 'react';
import Base from './BaseComponent';  // this._bind() ....... the "mass-binder"
import classnames from 'classnames';


export default ({editing, value, onEdit, className, ...props}) => {
	if (editing) {
		return <Edit
			className={className}
			value={value}
			onEdit={onEdit}
			{...props} />;
	}
	/*---WORKAROUND wrong syntax-highlight STOPPER---*/

	// if NOT editing...
	return <span className={classnames('value', className)} {...props}>
		{value}
	</span>;
}
/*---WORKAROUND wrong syntax-highlight STOPPER---*/


class Edit extends Base {
	render() {
		const {className, value, ...props} = this.props;

		return <input
			type="text"
			className={classnames('edit', className)}
			autoFocus={true}
			defaultValue={value}
			onBlur={this.finishEdit}
			onKeyPress={this.checkEnter}
			{...props} />;
	}
	/*---WORKAROUND wrong syntax-highlight STOPPER---*/

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

import React, { PropTypes } from 'react';

import './main.css';
import createMain from './Main';

// Components
import { Button } from '../../components/Button/Button'; // eslint-disable-line no-unused-vars

const Main = createMain(React);

const onClickFn = () => {
	console.log('Click'); // eslint-disable-line
};

const render = (props) => {
	<div className="row">
		<Button
			className="special"
			onClickFn={props.onClickFn()}
			text={'Special'} />
	</div>
};

Main.defaultProps = {
	render,
	onClickFn,
};

Main.propTypes = {
  render: PropTypes.func.isRequired,
  onClickFn: PropTypes.func.isRequired,
};

export default Main;

import React, { Fragment } from 'react';
import spinnersrc from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinnersrc} alt='loading...' style={{ width: '200px', margin: 'auto', display: 'block' }} />
    </Fragment>
  );
};

export default Spinner;

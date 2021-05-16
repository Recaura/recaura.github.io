import React from 'react';
import style from './layout.css';

export default props => (
  <div className={style.body}>{props.children}</div>
);

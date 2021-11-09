import React from 'react';
import { getCurrent } from './utils';

const Demo2 = () => {
  const time = getCurrent();
  return (
    <div>
      <p>this is demo2.</p>
      <p>last render  time is {time}.</p>
    </div>
  );
}

export default Demo2;

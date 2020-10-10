import React from 'react';
import Input from './index';
import { BrowserRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

storiesOf('Atoms / Input', module).add('default', () => (
  <Input label='Sample Title' />
));

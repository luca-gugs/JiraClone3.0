import React from 'react';
import Input from './index';
import { storiesOf } from '@storybook/react';

storiesOf('Atoms / Input', module).add('default', () => (
  <Input label='Sample Title' />
));

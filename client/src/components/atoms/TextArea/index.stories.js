import React from 'react';
import TextArea from './index';
import { storiesOf } from '@storybook/react';

storiesOf('Atoms / TextArea', module).add('default', () => (
  <TextArea label='Sample Title' />
));

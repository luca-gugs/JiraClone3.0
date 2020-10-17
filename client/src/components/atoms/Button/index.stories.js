import React from 'react';
import { HoverButton } from './index';
import { storiesOf } from '@storybook/react';

storiesOf('Atoms / Button', module)
  .add('HoverButton', () => <HoverButton>Hey There</HoverButton>)
  .add('SubmitButton', () => <HoverButton>Hey There</HoverButton>);

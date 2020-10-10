import React from 'react';
import LoginForm from './index';
import { BrowserRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import { Provider } from 'react-redux';
import store from '../../../store';

storiesOf('Oranisms / LoginForm', module).add('default', () => (
  <Provider store={store}>
    <LoginForm />
  </Provider>
));

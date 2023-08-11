import { Navigation } from '@shopify/polaris';
import {
    ArrowLeftMinor,
    HomeFilledMinor,
    ImportStoreMajor
} from '@shopify/polaris-icons';
import React from 'react';

function NavigationLayout() {
  return (
    <Navigation location="/">
        <Navigation.Section
            items = {[
                {
                    url: "/#",
                    label: 'Home',
                    icon: ArrowLeftMinor,
                    selected: window.location.pathname === '/'
                }
            ]} 
        />
        <Navigation.Section
             title="Exercise 1"
             separator
             items={[
                {
                    url: '/account',
                    label: 'Account',
                    icon: HomeFilledMinor,
                    selected: window.location.pathname === '/account'
                },
                {
                    url: '/addresses',
                    label: 'Address',
                    icon: ImportStoreMajor,
                    selected: window.location.pathname === '/addresses'
                }
            ]}  
        />
      </Navigation>
  );
}

export default NavigationLayout;
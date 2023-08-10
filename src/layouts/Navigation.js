import {Frame, Navigation} from '@shopify/polaris';
import {ArrowLeftMinor, HomeMajor, DraftOrdersFilledMajor} from '@shopify/polaris-icons';
import React from 'react';

function NavigationLayout() {
  return (
    <Frame>
      <Navigation location="/">
        <Navigation.Section
            items = {[
                {
                    url: "/",
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
                    icon: HomeMajor,
                    selected: window.location.pathname === '/account'
                },
                {
                    url: '/address',
                    label: 'Address',
                    icon: DraftOrdersFilledMajor,
                    selected: window.location.pathname === '/address'
                }
            ]}  
        />
      </Navigation>
    </Frame>
  );
}

export default NavigationLayout;
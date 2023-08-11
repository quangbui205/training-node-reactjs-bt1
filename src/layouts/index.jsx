import {
  AppProvider,
  Frame
} from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import React from "react";
import TopBarLayout from "./TopBar";
import NavigationLayout from "./Navigation";

function Layout({ children }) {
  return (
      <AppProvider i18n={en}>
        <Frame
            topBar={<TopBarLayout />}
            navigation={<NavigationLayout />}
        >
            <React.Fragment>
                {children}
            </React.Fragment>
        </Frame>
      </AppProvider>
  )
}

export default Layout;

import {Page} from '@shopify/polaris';

function HomePage() {
    localStorage.clear();
    return (
        <Page title="Home">
            Welcome to Home Page!
        </Page>
    );
}
  
export default HomePage;
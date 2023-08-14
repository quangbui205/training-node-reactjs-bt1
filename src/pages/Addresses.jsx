import {
    Page,
    Layout,
    LegacyCard,
    DataTable
} from '@shopify/polaris';
import React from 'react';

function Addresses() {
    const addressesList = localStorage.getItem('addresses') ? JSON.parse(localStorage.getItem('addresses')) : [];

    return (
        <Page title="My Addresses">
            <Layout>
                <Layout.AnnotatedSection
                    id="addressDetails"
                    title="Address details"
                    description="You can click on Account Menu to edit addresses."
                >
                    <LegacyCard sectioned>
                        <DataTable
                            columnContentTypes={[
                                'text',
                                'text'
                            ]}
                            headings={[
                                'Address',
                                'City'
                            ]}
                            rows={addressesList.map(value => {
                                return [value.address, value.city]
                            })}
                        />
                    </LegacyCard>
                </Layout.AnnotatedSection>
            </Layout>

        </Page>
    );
}
  
export default Addresses;
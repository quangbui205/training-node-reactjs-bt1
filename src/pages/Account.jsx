import {
    useField,
    useForm,
    useDynamicList
} from '@shopify/react-form';

import {
    Page,
    Layout,
    LegacyCard,
    FormLayout,
    TextField,
    ButtonGroup,
    Button,
    Toast,
} from '@shopify/polaris';
import {
    useState,
    useCallback,
} from "react";
import React from 'react';

function Account() {
    const [activeToast, setActiveToast] = useState(false);
    const toggleActive = useCallback(() => setActiveToast((active) => !active), []);
    const toastMarkup = activeToast ? (
        <Toast content="Success Storage" success onDismiss={toggleActive} duration={2000} />
    ) : null;
    const emptyAddressFactory = (): {} => ({
        address: '',
        city: ''
    });
    const addressesList = useDynamicList(localStorage.getItem('addresses') ? JSON.parse(localStorage.getItem('addresses')) : [], emptyAddressFactory);

    const {
        fields,
        submit
    } = useForm({
        fields: {
            username: useField(localStorage.getItem('username') || "QuangBM"),
            email: useField( localStorage.getItem('email') || "quangbm@gmail.com"),
            addressesList: addressesList
        },
        onSubmit: async (fieldValues) => {
            localStorage.setItem('username', fieldValues.username);
            localStorage.setItem('email', fieldValues.email);
            let listAddressValue = fieldValues.addressesList.value;
            if(listAddressValue.length > 0) {
                for (let x in listAddressValue) {
                    if(listAddressValue[x].address === '' && listAddressValue[x].city === '') {
                        listAddressValue.splice(x, 1);
                    }
                }
            }
            // listAddressValue = addressesList;
            console.log(listAddressValue);
            localStorage.setItem('addresses', JSON.stringify(listAddressValue));
            window.dispatchEvent(new Event('submitForm'));
            toggleActive();
            return {status: 'fail', errors: [{message: 'bad form data'}]};
        },
    });



    return (
        <Page title="Account">
            <Layout>
                <Layout.AnnotatedSection
                    id="accountDetails"
                    title="Account details"
                    description="Jaded pixer will use this as your account infomation."
                >
                    <LegacyCard sectioned>
                        <FormLayout>
                            <TextField
                                label="Fullname"
                                name="username"
                                {...fields.username}
                            />
                            <TextField
                                type="email"
                                label="Email"
                                name="email"
                                {...fields.email}
                            />
                        </FormLayout>
                    </LegacyCard>
                    <LegacyCard sectioned>
                        <FormLayout>
                            {
                                addressesList.fields.map((field, index) => (<React.Fragment key={`address-${index}`}>
                                    <TextField
                                        autoComplete="off"
                                        label={`Address (${index + 1})`}
                                        onChange={field.address.onChange}
                                        value={field.address.value}
                                    />
                                    <TextField
                                        autoComplete="off"
                                        label={`City`}
                                        onChange={field.city.onChange}
                                        value={field.city.value}
                                    />
                                </React.Fragment>))
                            }
                            <ButtonGroup>
                                <Button onClick={() => addressesList.addItem()}>New Address</Button>
                                <Button primary onClick={() => submit()}>Save</Button>
                            </ButtonGroup>
                        </FormLayout>
                    </LegacyCard>
                </Layout.AnnotatedSection>
            </Layout>
            <div style={{height: '250px'}}>
                {toastMarkup}
            </div>
        </Page>
    );
}
  
export default Account;
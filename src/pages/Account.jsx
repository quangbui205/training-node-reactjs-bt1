import {
    Page,
    Layout,
    LegacyCard,
    FormLayout,
    TextField,
    ButtonGroup,
    Button
} from '@shopify/polaris';
import { useState } from "react";
import React from 'react';

function Account() {
    // const [name, setName] = useState(localStorage.getItem('name') || "Quang BM");
    // const [email, setEmail] = useState(localStorage.getItem('name') || "quangbm@gmail.com");
    const [inputs, setInputs] = useState({
        'username' : localStorage.getItem('username') || "Quang BM",
        'email' : localStorage.getItem('email') || "quangbm@gmail.com"
    });

    const handleChangeInput = (event) => {
        console.log(event)
        // const name = event.target.name;
        // const value = event.target.value;
        // setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmitForm = (event) => {
        console.log(event)
        // localStorage.setItem('name', fieldValues.name);
        // localStorage.setItem('email', fieldValues.email);
    }

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
                                onChange={handleChangeInput}
                                autoComplete="off"
                                value={inputs.name || ""}
                            />
                            <TextField
                                type="email"
                                label="Email"
                                name="email"
                                onChange={handleChangeInput}
                                autoComplete="email"
                                value={inputs.email || ""}
                            />

                            <ButtonGroup>
                                <Button>New Address</Button>
                                <Button primary onClick={handleSubmitForm}>Save</Button>
                            </ButtonGroup>
                        </FormLayout>
                    </LegacyCard>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
    );
}
  
export default Account;
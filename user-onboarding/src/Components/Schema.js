import * as yup from 'yup'; 


    const Schema = yup.object().shape({
        name: yup.string().required('name is required').min(2, 'Name needs to have more than 2 characters'),
        email: yup.string().email().required('Email is required'),
        password: yup.string().required().min(6,'Password must be at least 6 characters long'),
        agree: yup.boolean().oneOf([true],'You must agree to the Terms of Service.')
    })

    export default Schema 
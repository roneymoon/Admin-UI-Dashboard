import { Box, Button, TextField } from '@mui/material'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}?[ -]?[0-9]{3,4}?$/

const userSchema = yup.object().shape({
    firstName: yup.string().required("This Field is required"),
    lastName: yup.string().required("This Field is required"),
    email: yup.string().email("Invalid email").required("This Field is required"),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("This Field is Required"),
    address1: yup.string().required("This Field is required"),
    address2: yup.string().required("This Field is required"),
})

const ProfileForm = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)")

    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Box mx="20px" my="10px" mb="5rem">
            <Header title="CREATE USER" subtitle="Create a new user profile" />

            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit} >
                        <Box
                            display="grid"
                            gap={"30px"}
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            // Targets all direct <div> children inside the component.
                            sx={{
                                "& > div": {
                                    gridColumn: isNonMobile ? undefined : "span 4",
                                },
                                mt: "1rem"
                            }}
                        >
                            <TextField
                                name='firstName'
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                label="First Name"
                                fullWidth
                                variant='filled'
                                size='small'
                                type='text'
                                sx={{ gridColumn: "span 2"}}
                            />
                            <TextField
                                name='lastName'
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                label="Last Name"
                                size='small'
                                fullWidth
                                variant='filled'
                                type='text'
                                sx={{ gridColumn: "span 2"}}
                            />
                            <TextField
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                label="Email"
                                size='small'
                                fullWidth
                                variant='filled'
                                type='email'
                                sx={{ gridColumn: "span 4"}}
                            />
                            <TextField
                                name='contact'
                                value={values.contact}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                label="Contact Number"
                                size='small'
                                fullWidth
                                variant='filled'
                                type='text'
                                sx={{ gridColumn: "span 4"}}
                            />
                            <TextField
                                name='address1'
                                value={values.address1}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                label="Address 1"
                                size='small'
                                fullWidth
                                variant='filled'
                                type='text'
                                sx={{ gridColumn: "span 4"}}
                            />
                            <TextField
                                name='address2'
                                value={values.address2}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                label="Address 2"
                                size='small'
                                fullWidth
                                variant='filled'
                                type='text'
                                sx={{ gridColumn: "span 4"}}
                            />
                        </Box>

                        <Box justifyContent="end" mt="10px" display="flex">
                            <Button type="submit" color="secondary" variant="contained">
                                Create User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default ProfileForm

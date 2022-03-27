
// {errorName, errorType, location, description, bookId, decision}
import Layout from '../../components/Layout';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

// {errorName, errorType, location, description, bookId, decision}
// And now we can use these
function CreateError() {
    function validateName(value) {
      let error
    //   if (!value) {
    //     error = 'Name is required'
    //   } else if (value.toLowerCase() !== 'naruto') {
    //     error = "Jeez! You're not a fan 😱"
    //   }
      return error
    }
  
    return (
      <Formik
        initialValues={{
            errorName: '', 
            errorType: '', 
            location: '', 
            description: '', 
            bookId: '', 
            decision: ''}
        }
        
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >

        { (props) => (
        <Layout>
            <Form>
            <Field name='name' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor='name'>First name</FormLabel>
                  <Input {...field} id='name' placeholder='name' />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
           
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
            </Form>
        </Layout>
          
        )}
      </Formik>
    )
  }

export default CreateError
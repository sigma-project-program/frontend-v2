
// {errorName, errorType, location, description, bookId, decision}
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { Input, Select, Textarea} from '@chakra-ui/react';
import Layout from '../../components/Layout';
 
 const MyTextInput = ({ label, ...props }) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
   const [field, meta] = useField(props);
   return (
     <>
       <label htmlFor={props.id || props.name}>{label}</label>
       <Input className="text-input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </>
   );
 };


 const MyLongTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Textarea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};


const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};


// errorName, errorType, location, description, bookId, decision}

const validationSchema= Yup.object(
  {
  errorName: Yup.string().required(''),
  errorType: Yup.string().required(''),
  location: Yup.string().required(''),
  description: Yup.string().required(''),
  bookId: Yup.number().required(''),
})

const onSubmit= (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
}

const initialValues ={
  errorName: '', 
  errorType: '', 
  location: '', 
  description: '', 
  bookId:'', 
  decision:''
}

const CreateError = () => {
  return (
      <>
        <h1>Subscribe!</h1>
        <Formik 
        initialValues={{...initialValues}} 
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
          

          <Form>
           <MyTextInput
             label="error name"
             name="errorName"
             type="text"
             placeholder="forgot not equal to sign"
           />
 
           <MyTextInput
             label="errorType"
             name="errorType"
             type="text"
             placeholder="typo"
           />
          
          <MyTextInput
             label="location"
             name="location"
             type="text"
             placeholder="Page 32 Para 3 starting with 'abcdefg'"
           />
 
           <MyLongTextInput
             label="description"
             name="description"
             type="text"
             placeholder="The context implies x!=y since x > y but..."
           />
          
          <MyTextInput
             label="Book ID"
             name="bookId"
             type="number"
             placeholder="1"
           />
          

           {/* <MySelect label="Error" name="jobType">
             <option value="">Select a job type</option>
             <option value="designer">Designer</option>
             <option value="development">Developer</option>
             <option value="product">Product Manager</option>
             <option value="other">Other</option>
           </MySelect>
  */}
           <button type="submit">Submit</button>
          </Form>
        </Formik>
      </>
      )
}

/*
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


*/

export default function() {
  return(
  <Layout>
    <CreateError></CreateError>
  </Layout>
  )
  
}
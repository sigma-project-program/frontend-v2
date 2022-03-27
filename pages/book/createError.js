
// {errorName, errorType, location, description, bookId, decision}
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { 
  Input, Select, Textarea, useToast,
  Heading, Text, Container,
  FormControl, FormLabel, FormErrorMessage, Button
} from '@chakra-ui/react';
import Layout from '../../components/Layout';
import createError from '../../lib/createError';
 
 const MyTextInput = ({ label, ...props }) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
   const [field, meta] = useField(props);
   return (
     <FormControl mt={4}>
       <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
       <Input className="text-input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <FormErrorMessage className="error">{meta.error}</FormErrorMessage>
       ) : null}
     </FormControl>
   );
 };


 const MyLongTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <FormControl mt={4}>
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <Textarea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <FormErrorMessage className="error">{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
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

  // setTimeout(() => {
    // alert(JSON.stringify(values, null, 2));
    

//     await 
//     setSubmitting(false);
//   }, 400);
// }

const initialValues ={
  errorName: '', 
  errorType: '', 
  location: '', 
  description: '', 
  bookId:'', 
  decision:''
}

const CreateError = () => {
  const toast = useToast()

  const onSubmit = async (values, { setSubmitting }) => {
    console.log("values follows:\n\n");
    console.log(values);
    console.log("\n\n");
    let res = await createError(values);
    console.log("res:")
    console.log(res)
  
    let title
    let status
    
    if(res.created) {
      title =  `Yipee! Pushed Error to DB`
      status = 'success'
    } else {
      title = `An error occurred when adding Error to Database`
      status = 'error'
    }
    toast({ title, status, isClosable: true, duration: 3000 })
  
    
    
  }

  return (
      <Container  pl={32}>
       <Heading mt={5} as='h2' size='lg'>Create New Error</Heading>
        <Formik 
        initialValues={{...initialValues}} 
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
          
          <Container mt={10}>
          <Form >
           <MyTextInput
             label="Error Name"
             name="errorName"
             type="text"
             placeholder="Forgot not equal to sign"
           />
 
           <MyTextInput
             label="Error Type"
             name="errorType"
             type="text"
             placeholder="Typo"
           />
          
          <MyTextInput
             label="Location"
             name="location"
             type="text"
             placeholder="Page 32 Para 3 starting with 'abcdefg'"
           />
 
           <MyLongTextInput
             label="Description"
             name="description"
             type="text"
             placeholder="The context implies x!=y but since x > y ..."
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
           <Button mt={4} colorScheme=
          'teal' type="submit">
            Submit
          </Button>
          </Form>
          </Container>
        </Formik>
      </Container>
      )
      
      // isLoading={props.isSubmitting}
}




export default function() {
  return(
  <Layout>
    <CreateError></CreateError>
  </Layout>
  )
  
}
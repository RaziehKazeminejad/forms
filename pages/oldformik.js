/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const initialValues = {
  firstName:'',
  lastName:'',
  email:'',
  age:''
}

const onSubmit = values => {
  console.log('Form data', values)
}

// const validate = values => {
//   let errors = {}

//   if(!values.firstName) {
//     errors.firstName = 'Required!'
//   }
//   if(!values.lastName) {
//     errors.lastName = 'Required!'
//   }
//   if(!values.email) {
//     errors.email = 'Required!'
//   }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email format'
//   }
//   if(!values.age) {
//     errors.age = 'Required!'
//   }
//   return errors
// }

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required!'),
  lastName: Yup.string().email('Invalid email format!').required('Required!'),
  email: Yup.string().required('Required!'),
  age: Yup.string().required('Required!'),
})

export default function oldformik() {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  console.log('Visited fields', formik.touched)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
          <input
            type="text"
            id="firstName"
            name="firstName"
            onBlur={formik.handleBlur}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="FirstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? <div className="text-red-600">{formik.errors.firstName}</div> : null}
          <input
            type="text"
            id="lastName"
            name="lastName"
            onBlur={formik.handleBlur}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="LastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? <div className="text-red-600">{formik.errors.lastName}</div> : null}
          <input
            type="email"
            id="email"
            name="email"
            onBlur={formik.handleBlur}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email &&formik.errors.email ? <div className="text-red-600">{formik.errors.email}</div> : null}
          <input 
            type="number"
            id="age"
            name="age"
            onBlur={formik.handleBlur}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="age"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          {formik.touched.age && formik.errors.age ? <div className="text-red-600">{formik.errors.age}</div> : null}
          <select 
            onBlur={formik.handleBlur}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          >
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>

          <button 
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

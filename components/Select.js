import React from 'react';

export default function Select({ selectOptions, name, formik }) {
  return (
    <div>
      <select
        {...formik.getFieldProps(name)}
        name={name}
        onBlur={formik.handleBlur}
        className="mt-3 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      >
        {selectOptions.map((item) => {
          <option key={item.value} value={item.value}>
            {item.label}
          </option>;
        })}
      </select>
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-600">{formik.errors[name]}</div>
      )}
    </div>
  );
}

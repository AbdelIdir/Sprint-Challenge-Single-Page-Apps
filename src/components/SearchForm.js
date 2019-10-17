import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SearchForm(props) {
  const [searchQuery, setSearchQuery] = useState("");

  
  const handleQuery = e => {
    e.preventdefault();
  }
  const fieldQueriesV = e => {
    setSearchQuery(e.target.value);
  };
  const makeASearch = searchQuery => {
    props.search(searchQuery);
  };
  return (
    <Formik
      initialValues={searchQuery}
       onSubmit={handleQuery}
      //formik functions here
      render={props => {
        return (
          <Form>
            <div>
              <label>
                <Field
                  name="searching"
                  type="text"
                  placeholder="Type in a character"
                />
              </label>
            </div>

            <button type="submit"> Search Now!</button>
          </Form>
        );
      }}
    />
  );
}

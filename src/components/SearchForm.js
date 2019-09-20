import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SearchForm(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const fieldQueriesV = e => {
    setSearchQuery(e.target.value);
  };
  const makeASearch = searchQuery => {
    props.search(searchQuery);
  };
  return (
    <Formik
      initialValues={searchQuery}
      onSubmit={makeASearch}
      //formik functions here
      render={props => {
        return (
          <Form>
            <div>
              <label>
                <Field
                  name="searching"
                  type="text"
                  placeholder="Search Something"
                />
              </label>
            </div>

            <button type="submit"> Search now !</button>
          </Form>
        );
      }}
    />
  );
}

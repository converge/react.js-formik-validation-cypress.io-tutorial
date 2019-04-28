import React, { Component } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
const api = null

export default class Login extends Component {

  // TODO: working here
  // sendLoginForm = (username, password) => {
  //   console.log(username)
  //   console.log(password)
  // }

  render() {
    return (
      <div className="login-box">
        <div className="login-form">
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            // validation fields
            validate={values => {
              let errors = {}
              if (!values.username) {
                errors.username = 'Username is required'
              } else if (!values.password) {
                errors.password = 'Password is required'
              }
              return errors
            }}
            onSubmit={async (values, actions) => {
              actions.setStatus({
                success: 'Login...',
                css: 'success'
              })
              actions.setSubmitting(false)
              try {
                const response = api.post('/auth/login', {
                  username: values.username,
                  password: values.password
                })
                // login(response.data.token)
                this.props.history.push('/')
              } catch (err) {
                actions.setStatus({
                  success: 'Username or Password incorrect !',
                  css: 'error'
                })
              }
            }}
            render={formikForm => (
              <Form>
                <div className="form-item">
                  <Field name="username" type="text" placeholder="Username" />
                </div>
                <div className="form-item">
                  <Field name="password" type="password" placeholder="Password" />
                </div>
                <ErrorMessage
                  name="username"
                  className="field-validation"
                  component="div"
                />
                <ErrorMessage
                  name="password"
                  className="field-validation"
                  component="div"
                />
                <div className={`form-sending ${formikForm.status ? formikForm.status.css : ''}`}>
                  {formikForm.status ? formikForm.status.success : ''}
                </div>
                <div className="form-item">
                  <button type="submit" disabled={formikForm.isSubmitting}>
                    Login
                  </button>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    )
  }
}
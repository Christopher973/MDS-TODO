import { useEffect, useRef } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  interface SignupData {
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string
  }

  const onSubmit = async (data: SignupData) => {
    console.log('Form submission:', data)

    const response = await signUp({
      username: data.email,
      password: data.password,
      userAttributes: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone || null,
      },
    })

    console.log('Signup data:', data) // Debug

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <Metadata title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="firstName"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Prénom
                  </Label>
                  <TextField
                    name="firstName"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{
                      required: true,
                    }}
                  />
                  <FieldError name="firstName" className="rw-field-error" />

                  <Label
                    name="lastName"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Nom
                  </Label>
                  <TextField
                    name="lastName"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{
                      required: true,
                    }}
                  />
                  <FieldError name="lastName" className="rw-field-error" />

                  <Label
                    name="phone"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Téléphone
                  </Label>
                  <TextField
                    name="phone"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                  />
                  <FieldError name="phone" className="rw-field-error" />

                  <Label
                    name="email"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Email
                  </Label>
                  <TextField
                    name="email"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={emailRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Email is required',
                      },
                    }}
                  />
                  <FieldError name="email" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                  <FieldError name="password" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage

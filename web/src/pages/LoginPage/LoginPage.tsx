  import { useEffect, useRef } from 'react'

  import {
    Form,
    Label,
    TextField,
    PasswordField,
    Submit,
    FieldError,
  } from '@redwoodjs/forms'
  import { Link, navigate, routes } from '@redwoodjs/router'
  import { Metadata } from '@redwoodjs/web'
  import { toast, Toaster } from '@redwoodjs/web/toast'

  import { useAuth } from 'src/auth'

  const LoginPage = () => {
    const { isAuthenticated, logIn } = useAuth()

    useEffect(() => {
      if (isAuthenticated) {
        navigate(routes.home())
      }
    }, [isAuthenticated])

    const emailRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
      emailRef.current?.focus()
    }, [])

    const onSubmit = async (data: Record<string, string>) => {
      const response = await logIn({
        username: data.email,
        password: data.password,
      })

      if (response.message) {
        toast(response.message)
      } else if (response.error) {
        toast.error(response.error)
      } else {
        toast.success('Welcome back!')
      }
    }

    return (
      <>
        <Metadata title="Login" />
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

        <div className="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800">
                Sign in
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Don't have an account yet?{' '}
                <Link
                  to={routes.signup()}
                  className="font-medium text-blue-600 decoration-2 hover:underline focus:underline focus:outline-none"
                >
                  Sign up here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                <svg
                  className="h-auto w-4"
                  width="46"
                  height="47"
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign in with Google
              </button>

              <div className="flex items-center py-3 text-xs uppercase text-gray-400 before:me-6 before:flex-1 before:border-t before:border-gray-200 after:ms-6 after:flex-1 after:border-t after:border-gray-200">
                Or
              </div>

              <Form onSubmit={onSubmit}>
                <div className="grid gap-y-4">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm">
                      Email address
                    </label>
                    <div className="relative">
                      <TextField
                        name="email"
                        ref={emailRef}
                        validation={{
                          required: {
                            value: true,
                            message: 'Email is required',
                          },
                        }}
                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                      />
                      <FieldError
                        name="email"
                        className="mt-2 text-xs text-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="mb-2 block text-sm">
                        Password
                      </label>
                      <Link
                        to={routes.forgotPassword()}
                        className="text-sm font-medium text-blue-600 decoration-2 hover:underline focus:underline focus:outline-none"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <PasswordField
                        name="password"
                        validation={{
                          required: {
                            value: true,
                            message: 'Password is required',
                          },
                        }}
                        className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                      />
                      <FieldError
                        name="password"
                        className="mt-2 text-xs text-red-600"
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                      />
                    </div>
                    <div className="ms-3">
                      <label htmlFor="remember-me" className="text-sm">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <Submit className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Sign in
                  </Submit>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default LoginPage

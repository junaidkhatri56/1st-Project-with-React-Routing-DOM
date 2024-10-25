import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md mt-[120px]">
        <h2 className="text-3xl font-bold text-center text-gray-900">Create Your Account</h2>
        <form className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text ml-2">I agree to the Terms & Conditions</span>
            </label>
          </div>
          <div className="form-control">
            <button className="btn btn-primary w-full">Sign Up</button>
          </div>
        </form>
        <p className="text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>   
    </>
  )
}

export default SignUp
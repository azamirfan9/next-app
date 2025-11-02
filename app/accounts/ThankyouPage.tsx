export default function ThankyouPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
          <div className="flex flex-col items-center space-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-28 w-28 text-green-600" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h1 className="text-4xl font-bold">Thank You !</h1>
              <p>Your account was activated Successfully</p>
              <a href="/"
                  className="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring">
                  <span className="text-sm font-medium"> Go to Login Page </span>
              </a>
          </div>
      </div>
  </div>
  );
}
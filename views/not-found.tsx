"use client";

export default function ViewNotFound() {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
      <p className="mt-4 text-lg">Please check the URL or return to the homepage.</p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">Go to Homepage</a>
    </div>
  );

}
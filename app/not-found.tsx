
import React from "react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6">Page not found</h2>
            <p className="text-lg mb-8">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <a 
                href="/"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-500"
            >
                Go back to home
            </a>
        </div>
    );
}
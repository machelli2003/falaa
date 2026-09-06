import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center py-28 text-center">
      <span className="font-display text-6xl font-bold text-falaa">404</span>
      <h1 className="mt-4 font-display text-2xl font-bold">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-mist">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Link to="/" className="mt-7 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-charcoal">
        Back to Home
      </Link>
    </div>
  );
}

import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-lg mt-4 text-gray-600">
        Sorry, the page you're looking for doesn't exist.
      </p>
      {error?.statusText || error?.message ? (
        <p className="mt-2 text-sm text-gray-500">
          {error.statusText || error.message}
        </p>
      ) : null}
    </div>
  );
};

export default ErrorPage;

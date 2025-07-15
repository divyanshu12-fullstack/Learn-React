import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="ErrorPage">
      <h1>404 Error Page Not Found</h1>
    </div>
  );
};

export default ErrorPage;

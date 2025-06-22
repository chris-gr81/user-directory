import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Index from "./routes/Index";
import Overwiev from "./routes/overview/Overview";
import Create from "./routes/create/Create";
import ErrorPage from "./routes/error/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Index /> },
        { path: "overview", element: <Overwiev /> },
        { path: "create", element: <Create /> },
        { path: "edit/:userId", element: <Create /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

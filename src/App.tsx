import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Index from "./routes/Index";
import CreateView from "./routes/create/CreateView";
import ErrorPage from "./routes/error/ErrorPage";
import Overview from "./routes/overview/Overview";
import EditView from "./routes/edit/EditView";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Index /> },
        { path: "overview", element: <Overview /> },
        { path: "create", element: <CreateView /> },
        { path: "edit/:userId", element: <EditView /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

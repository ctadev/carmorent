import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./store";

import { Navbar, Footer } from "./components";
import {
  Home,
  Search,
  Login,
  Detail,
  AddCar,
  Rent,
  ProtectedRoutes,
  Profile,
  Edit,
  Success,
  Cancel,
} from "./pages";

function App() {
  const Layout = () => {
    return (
      <main className="bg-white-200">
        <Provider store={store}>
          <Navbar />
          <Outlet />
          <Footer />
          <Toaster position="bottom-center" />
        </Provider>
      </main>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/",
          element: <ProtectedRoutes />,
          children: [
            {
              path: "/add-car",
              element: <AddCar />,
            },
            {
              path: "/profile",
              element: <Profile />,
            },
            {
              path: "/sucess",
              element: <Success />,
            },
            {
              path: "/cancel",
              element: <Cancel />,
            },
            {
              path: "/rent/:id",
              element: <Rent />,
            },
            {
              path: "/edit/:id",
              element: <Edit />,
            },
          ],
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/detail/:id",
          element: <Detail />,
        },
      ],
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;

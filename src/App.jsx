import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import BookDetail from "./components/BookDetail.jsx";
import ListedBooks from "./components/ListedBooks.jsx";
 import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "books/:bookId", element: <BookDetail />,
              loader:()=> fetch('/booksData.json')},
      {path:"listedBooks", element:<ListedBooks />,
              loader:()=> fetch('/booksData.json')}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

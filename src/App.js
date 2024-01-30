import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { EditSubject } from "./pages/EditSubject";
import { AddQuestion } from "./pages/AddQuestion";
import { EditQuestion } from "./pages/EditQuestion";
import { Lessons } from "./pages/Lessons";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Question from "./pages/Question";
import AddSubject from "./pages/AddSubject";
import "./App.css";
import { CenterSales } from "./pages/CenterSales";
import { AddCenter } from "./pages/AddCenter";
import { EditCenter } from "./pages/EditCenter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Subjects /> },
      {
        path: "/qestions",
        element: <Question />,
      },
      {
        path: "/lessons",
        element: <Lessons />,
      },
      {
        path: "/centerSales",
        element: <CenterSales />,
      },
      {
        path: "/addSubject",
        element: <AddSubject />,
      },
      {
        path: "/addQuestion",
        element: <AddQuestion />,
      },
      {
        path: "/addCenter",
        element: <AddCenter />,
      },
      {
        path: "/editSubject",
        element: <EditSubject />,
      },
      {
        path: "/editQuestion",
        element: <EditQuestion />,
      },
      {
        path: "/editCenter",
        element: <EditCenter />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    children: [{ index: true, element: <Login /> }],
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />{" "}
      </div>
    </>
  );
}

export default App;

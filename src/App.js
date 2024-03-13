import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { EditSubject } from "./pages/EditSubject";
import { AddQuestion } from "./pages/AddQuestion";
import { EditQuestion } from "./pages/EditQuestion";
import { Lessons } from "./pages/Lessons";
import { Units } from "./pages/Units";
import { CenterSales } from "./pages/CenterSales";
import { AddCenter } from "./pages/AddCenter";
import { EditUnits } from "./pages/EditUnits";
import { EditCenter } from "./pages/EditCenter";
import { EditLesson } from "./pages/EditLesson";
import { AddCodeDepartment } from "./pages/AddCodeDepartment";
import { AddPackageMaterial } from "./pages/AddPackageMaterial";
import { AddPackageDepartment } from "./pages/AddPackageDepartment";
import { AddCodeMaterial } from "./pages/AddCodeMaterial";
import { AddLessons } from "./pages/AddLessons";
import { AddUnits } from "./pages/AddUnits";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Question from "./pages/Question";
import AddSubject from "./pages/AddSubject";
import Codes from "./pages/Codes";
import Notification from "./pages/Notification";
import Accounts from "./pages/Accounts";
import Packages from "./pages/Packages";
import Messages from "./pages/Messages";
import Admins from "./pages/Admins";
import "./App.css";

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
        path: "/codes",
        element: <Codes />,
      },
      {
        path: "/units",
        element: <Units />,
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
        path: "/addUnit",
        element: <AddUnits />,
      },
      {
        path: "/editSubject/:id",
        element: <EditSubject />,
      },
      {
        path: "/editQuestion/:id",
        element: <EditQuestion />,
      },
      {
        path: "/editCenter/:id",
        element: <EditCenter />,
      },
      {
        path: "/editLesson/:id",
        element: <EditLesson />,
      },
      {
        path: "/editUnit/:id",
        element: <EditUnits />,
      },
      {
        path: "/notifications",
        element: <Notification />,
      },
      {
        path: "/managerAccounts",
        element: <Accounts />,
      },
      {
        path: "/addCodeDepartment",
        element: <AddCodeDepartment />,
      },
      {
        path: "/addCode",
        element: <AddCodeMaterial />,
      },
      {
        path: "/addPackage",
        element: <AddPackageMaterial />,
      },

      {
        path: "/addPackageDepartment",
        element: <AddPackageDepartment />,
      },
      {
        path: "/addLesson",
        element: <AddLessons />,
      },
      {
        path: "/addUnits",
        element: <AddUnits />,
      },
      {
        path: "/packages",
        element: <Packages />,
      },
      {
        path: "/admins",
        element: <Admins />,
      },
      {
        path: "/messages",
        element: <Messages />,
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

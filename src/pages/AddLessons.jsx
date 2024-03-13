import { Fragment } from "react";
import { HeadInputs } from "../components/HeadInputs/HeadInputs";
import { FormAddLessons } from "../components/FormAddLessons/FormAddLessons";
export const AddLessons = () => {
  return (
    <Fragment>
      <HeadInputs title="إضافة درس جديد" />
      <FormAddLessons />
    </Fragment>
  );
};

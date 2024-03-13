import { Fragment } from "react";
import { HeadInputs } from "../components/HeadInputs/HeadInputs";
import { FormEditLessons } from "../components/FormEditLessons/FormEditLessons";

export const EditLesson = () => {
  return (
    <Fragment>
      <HeadInputs title="تعديل الدرس" />
      <FormEditLessons />
    </Fragment>
  );
};

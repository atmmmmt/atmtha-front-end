import { Fragment } from "react";
import { HeadInputs } from "../components/HeadInputs/HeadInputs";
import { FormEditQuestion } from "../components/FormEditQuestion/FormEditQuestion";
export const EditQuestion = () => {
  return (
    <Fragment>
      <HeadInputs title="تعديل السؤال الأول" />
      <FormEditQuestion />
    </Fragment>
  );
};

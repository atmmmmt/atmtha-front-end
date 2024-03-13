import { Fragment } from "react";
import { HeadInputs } from "../components/HeadInputs/HeadInputs";
import { FormEditSubject } from "../components/FormEditSubject/FormEditSubject";
export const EditSubject = () => {
  return (
    <Fragment>
      <HeadInputs title="تعديل مادة" />
      <FormEditSubject />
    </Fragment>
  );
};

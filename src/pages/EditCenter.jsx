import { Fragment } from "react";
import { FormEditCenter } from "./../components/FormEditCenter/FormEditCenter";
import { HeadInputs } from "./../components/HeadInputs/HeadInputs";

export const EditCenter = () => {
  return (
    <Fragment>
      <HeadInputs title="تعديل مركز" />
      <FormEditCenter />
    </Fragment>
  );
};

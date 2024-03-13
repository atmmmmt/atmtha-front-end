import { Fragment } from "react";
import { FormAddCenter } from "./../components/FormAddCenter/FormAddCenter";
import { HeadInputs } from "./../components/HeadInputs/HeadInputs";

export const AddCenter = () => {
  return (
    <Fragment>
      <HeadInputs title="إضافة مركز" />
      <FormAddCenter />
    </Fragment>
  );
};

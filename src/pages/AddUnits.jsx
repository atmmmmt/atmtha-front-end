import { Fragment } from "react";
import { HeadInputs } from "../components/HeadInputs/HeadInputs";
import { FormAddUnits } from "../components/FormAddUnits/FormAddUnits";

export const AddUnits = () => {
  return (
    <Fragment>
      <HeadInputs title="إضافة وحدة جديدة" />
      <FormAddUnits />
    </Fragment>
  );
};

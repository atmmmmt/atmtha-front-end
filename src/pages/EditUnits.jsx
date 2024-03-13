import { Fragment } from "react";
import { HeadInputs } from "../components/HeadInputs/HeadInputs";
import { FormEditUnits } from "../components/FormEditUnits/FormEditUnits";

export const EditUnits = () => {
  return (
    <Fragment>
      <HeadInputs title="تعديل وحدة" />
      <FormEditUnits />
    </Fragment>
  );
};

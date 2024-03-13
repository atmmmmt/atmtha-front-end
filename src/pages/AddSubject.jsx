import { Fragment } from "react";
import { HeadInputs } from "../components/HeadInputs/HeadInputs";
import { FormAddSubject } from "../components/FormAddSubject/FormAddSubject";
const AddSubject = () => {
  return (
    <Fragment>
      <HeadInputs title="إضافة مادة" />
      <FormAddSubject />
    </Fragment>
  );
};

export default AddSubject;

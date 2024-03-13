import { Fragment } from "react";
import { Input } from "../Input/Input";
import { Questions1 } from "../../utils/arrays";
export const QuestionInput = () => {
  return (
    <Fragment>
      {Questions1.map((ques, index) => {
        return (
          <Input
            key={index}
            for={ques.label}
            label={ques.label}
            type={ques.type}
            id={ques.label}
            name={ques.name}
          />
        );
      })}
    </Fragment>
  );
};

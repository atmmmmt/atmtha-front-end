import { Fragment } from "react";

export const HeadInputs = (props) => {
    return (
        <Fragment>
            <h3 className="text-darkBlue text-[30px] font-[700]">
                {props.title}
            </h3>
        </Fragment>
    );
};

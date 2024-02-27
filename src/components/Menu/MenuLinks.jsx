import { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../css/menu.css";
export const MenuLinks = (props) => {
    const location = useLocation();
    return (
        <Fragment>
            <NavLink
                className={`w-[209px] hover:bg-[#e9e9e966] transition duration-200 rounded-md flex items-center p-[12px] gap-[10px] ${
                    props.pathAdd?.includes(
                        "/" + location.pathname.split("/")[1]
                    )
                        ? "active"
                        : ""
                }`}
                to={props.path}
                end
            >
                <div>
                    <img src={props.srcImg} alt="" />
                </div>
                <span className="text-[18px] font-[500] text-silver">
                    {props.text}
                </span>
            </NavLink>
        </Fragment>
    );
};

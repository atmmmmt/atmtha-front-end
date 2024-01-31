import { NavLink } from "react-router-dom";
import QuestionCard from "../components/QuestionCard/QuestionCard";
import PaginationCom from "../components/Pagination";
import DrowbSubjects from "../components/QuestionCard/DrowbSubjects";

export default function Question() {
    return (
        <div className="subjects bg-bg  w-[100%] ">
            <div className="flex justify-between mb-[20px] items-center">
                <div className="flex gap-[21px]">
                    <DrowbSubjects
                        value={"المادة"}
                        text={[
                            "رياضيات",
                            "رياضيات",
                            "رياضيات",
                            "رياضيات",
                            "رياضيات",
                            "رياضيات",
                        ]}
                    />
                </div>
                <NavLink to="addQuestion">
                    <span className="text-main text-[18px] underline cursor-pointer">
                        إضافة سؤال جديدة
                    </span>
                </NavLink>
            </div>
            <div className="flex flex-col justify-between h-full">
                <div className="cardsSubject grid grid-cols-3 gap-[40px_60px]">
                    <QuestionCard />
                    <QuestionCard />
                </div>
                <PaginationCom />
            </div>
        </div>
    );
}

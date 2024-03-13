export const Links = [
  {
    id: 1,
    srcImg: "/assests/menuIcon/material.svg",
    text: "المواد",
    path: "/",
    pathAdd: ["/addSubject", "/editSubject"],
  },
  {
    id: 2,
    srcImg: "/assests/menuIcon/question.svg",
    text: "الوحدات",
    path: "units",
    pathAdd: ["/addUnit", "/editUnit"],
  },
  {
    id: 3,
    srcImg: "/assests/menuIcon/question.svg",
    text: "الدروس",
    path: "lessons",
    pathAdd: ["/addLesson", "/editLesson"],
  },
  {
    id: 5,
    srcImg: "/assests/menuIcon/question.svg",
    text: "الأسئلة",
    path: "qestions",
    pathAdd: ["/addQuestion", "/editQuestion"],
  },
  {
    id: 4,
    srcImg: "/assests/menuIcon/question.svg",
    text: "مراكز البيع",
    path: "centerSales",
    pathAdd: ["/addCenter", "/editCenter"],
  },
  {
    id: 5,
    srcImg: "/assests/menuIcon/qr.svg",
    text: "الأكواد",
    path: "codes",
    pathAdd: ["/addCodeDepartment", "/addCode"],
  },
  {
    id: 6,
    srcImg: "/assests/menuIcon/note.svg",
    text: "الباقات",
    path: "packages",
    pathAdd: ["/addPackage", "/addPackageDepartment"],
  },
  {
    id: 7,
    srcImg: "/assests/menuIcon/chat.svg",
    text: "الرسائل",
    path: "messages",
    pathAdd: [],
  },
  {
    id: 8,
    srcImg: "/assests/menuIcon/notification.svg",
    text: "الإشعارات",
    path: "notifications",
    pathAdd: ["/notifications"],
  },
  {
    id: 9,
    srcImg: "/assests/menuIcon/users.svg",
    text: "إدارة الحسابات",
    path: "managerAccounts",
    pathAdd: ["/managerAccounts", "/admins"],
  },
];
export const Materials = [
  {
    id: 2,
    label: "اسم المادة ",
    type: "text",
    name: "material",
  },
  {
    id: 3,
    label: "مدة السؤال",
    type: "text",
    name: "time",
  },
];
export const Questions1 = [
  {
    id: 1,
    label: "الجواب a",
    type: "text",
    name: "aAnswer",
  },
  {
    id: 2,
    label: "الجواب b",
    type: "text",
    name: "bAnswer",
  },
  {
    id: 3,
    label: "الجواب c",
    type: "text",
    name: "cAnswer",
  },
  {
    id: 4,
    label: "الجواب d",
    type: "text",
    name: "dAnswer",
  },
];
export const Centers = [
  {
    id: 2,
    label: "اسم المركز",
    name: "center",
    type: "text",
  },
  {
    id: 3,
    label: "العنوان",
    name: "addrres",
    type: "text",
  },
  {
    id: 4,
    label: "رقم الهاتف",
    name: "phone",
    type: "text",
  },
];
export const Units = [
  {
    id: 4,
    label: "اسم الوحدة",
    name: "name",
    type: "text",
  },
  {
    id: 3,
    label: "رقم الوحدة",
    name: "number",
    type: "number",
  },
];
export const Lessons = [
  {
    id: 4,
    label: "اسم الدرس",
    type: "text",
    name: "name",
  },
  {
    id: 3,
    label: "رقم الدرس",
    type: "number",
    name: "number",
  },
];
export const Lesson1 = [
  {
    id: 4,
    label: "اسم الدرس",
    type: "text",
    name: "name",
  },
];
export const Users = [
  {
    id: 1,
    label: "اسم المستخدم",
    type: "text",
    name: "user",
  },
  {
    id: 2,
    label: "رقم الهاتف",
    name: "phone",
    type: "text",
  },
  {
    id: 3,
    label: "البريد الإلكتروني",
    type: "email",
    name: "email",
  },
  {
    id: 4,
    label: "كلمة السر",
    type: "password",
    name: "password",
  },
];
export const Notifcation = [
  {
    id: 1,
    label: "عنوان الإشعار",
    type: "text",
    name: "title",
  },
  {
    id: 2,
    label: "نص الإشعار",
    type: "text",
    name: "body",
  },
];
export const PER_PAGE = 6;

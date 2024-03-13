import { request } from "../../utils/request";
import { dataActions } from "../slices/subscribersSlice";
import { toast } from "react-toastify";
import { setIdCookie } from "../../utils/cockies";

//Admin:
//Login Admin:
export const AdminLogin = (_state, setState, error, setErorr, userData) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.post(`/auth/login_admin`, userData);
      console.log(data.user);
      setIdCookie(data.user);
      dispatch(dataActions.login(data.user));
      setState(true);
      setErorr(null);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setErorr(error);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Get All Admins:
export const GetAdmins = (page, perPage) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get(
        `/users/profile/admin?page=${page}&perPage=${perPage}`
      );
      dispatch(dataActions.getAdmins(data.admins));
      return data;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Add Admins:
export const AddAdmins = (infoAdmin) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      const { data } = await request.post("/auth/register_admin", infoAdmin);
      dispatch(dataActions.addAdmin(data.user));
      toast.success("تمت اضافة أدمن");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Delete Admins
export const DeleteAdmins = (setOpen, IdAdmin, token) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.delete(`/users/profile/${IdAdmin}`, {
        headers: { Authorization: `Bearar ${token}` },
      });
      dispatch(dataActions.deleteAdmin(IdAdmin));
      toast.success("تم حذف الأدمن");
      setOpen(false);
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);
      setOpen(false);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Users:
//Get All Users:
export const GetUsers = (page, perPage) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get(
        `/users/profile?page=${page}&perPage=${perPage}`
      );
      dispatch(dataActions.getUsers(data.users));
      dispatch(dataActions.getCountUsers(data.totalCount));
      return data;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Add Users:
export const AddUsers = (infoUser) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      const { data } = await request.post("/auth/register", infoUser);
      dispatch(dataActions.addUsers(data.user));
      toast.success(`تمت اضافة مستخدم`);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Delete Users:
export const DeleteUsers = (setOpen, IdUser, token) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.delete(`/users/profile/${IdUser}`, {
        headers: { Authorization: `Bearar ${token}` },
      });
      dispatch(dataActions.deleteUsers(IdUser));

      toast.success(`تم حذف مستخدم`);
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setOpen(false);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Code:
//Get All Code:
export const GetCodes = (page, perPage) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get(
        `/codes?page=${page}&perPage=${perPage}`
      );
      dispatch(dataActions.getCodes(data.codes));
      return data;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Add Code:
export const AddCode = (setState, infoCode) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      const { data } = await request.post(`/codes/generateCode`, infoCode);
      dispatch(dataActions.addCode(data.codes));
      setState(true);
      toast.success("تمت اضافة كود");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Delete Code:
export const DeleteCode = (setOpen, IdCode) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.delete(`/codes/${IdCode}`);
      dispatch(dataActions.deleteCode(IdCode));
      toast.success(`تم حذف الكود`);
      setOpen(false);
      // handle the response as needed
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
      setOpen(false);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Packages:
//Get Packages:
export const GetPackages = (page, perPage) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get(
        `/codes/packages?page=${page}&perPage=${perPage}`
      );
      dispatch(dataActions.getPackages(data.codes));
      return data;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Add Packages:
export const AddPackage = (setState, infoPackage) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      const { data } = await request.post(`/codes/generateCode`, infoPackage);
      dispatch(dataActions.addPackage(data.codes));
      setState(true);
      toast.success("تمت اضافة الباقة");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Delete Package:
export const DeletePackage = (setOpen, IdPackage) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.delete(`/codes/${IdPackage}`);
      dispatch(dataActions.deletePackage(IdPackage));
      toast.success(`تم حذف الباقة`);
      setOpen(false);
      // handle the response as needed
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
      setOpen(false);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Download QR:
export const DownlaodQR = (setDownload, codeNumber) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      const response = await request.post(
        "/codes/download-image",
        {
          codeNumber,
        },
        { responseType: "blob" } // Set the response type to "blob" to handle binary data
      );

      // Create a download link for the image
      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "qrcode.png");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the download URL
      window.URL.revokeObjectURL(downloadUrl);
      setDownload(false);
      toast.success("تم تحميل الكود");
    } catch (error) {
      toast.error(error.response.data.message);
      setDownload(false);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Centers:
//Get Centers By Country:
export const GetCenters = (country, page, perPage) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      if (country) {
        const { data } =
          await request.get(`/centers?governorate=${country}?page=${page}&perPage=${perPage}
        `);
        dispatch(dataActions.getCenters(data));
        return data;
      }
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Get All Centers:
export const GetCenter = (page, perPage) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get(
        `/centers?page=${page}&perPage=${perPage}`
      );
      console.log(data);
      dispatch(dataActions.getCenters(data));
      return data;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Post Center:
export const AddCenter = (setState, infoCenter) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      const { data } = await request.post("/centers", infoCenter);
      dispatch(dataActions.addCenter(data.center));
      toast.success(`تمت اضافة مركز`);
      setState(true);
      // handle the response as needed
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Edit Center:
export const EditCenter = (
  state,
  setState,
  error,
  setErorr,
  IdCenter,
  infoCenterEdit
) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.put(`/centers/${IdCenter}`, infoCenterEdit);
      toast.success(`تمت تعديل مركز`);
      setState(true);
      setErorr(null);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setErorr(error);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Delete Center:
export const DeleteCenter = (setOpen, IdCenter) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.delete(`/centers/${IdCenter}`);
      dispatch(dataActions.deleteCenters(IdCenter));
      setOpen(false);
      toast.success(`تم حذف مركز`);
    } catch (error) {
      console.error(error);
      setOpen(false);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Subject:
//Get All Subjects:
export const GetSubjects = (sideId, page, perPage) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get(
        `/subjects?sideId=${sideId}&page=${page}&perPage=${perPage}`
      );
      dispatch(dataActions.getSubjects(data.subjects));
      return data;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Add Subjects:
export const AddSubject = (setState, infoSubject) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      const { data } = await request.post("/subjects", infoSubject);
      dispatch(dataActions.addSubject(data.subjects));
      setState(true);
      toast.success(`تمت اضافة مادة`);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Edit Subjects
export const EditSubject = (setState, IdSubject, infoSubjectEdit) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.put(`/subjects/${IdSubject}`, infoSubjectEdit);
      toast.success("تم تعديل المادة");
      setState(true);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Delete Subject:
export const DeleteSubject = (IdSubject) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.delete(`/subjects/${IdSubject}`);
      dispatch(dataActions.deleteSubject(IdSubject));
      toast.success(`تم حذف المادة`);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Question:
//Get Questions:
export const GetQuestions = (page, perPage) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get(
        // `/questions?page=${page}&perPage=${perPage}`
        `/questions`
      );
      console.log(data);
      dispatch(dataActions.getQuestion(data.questions));
      return data;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Add Questions:
export const AddQuestions = (setState, infoQuestion) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      const { data } = await request.post("/questions", infoQuestion);
      console.log(data);
      dispatch(dataActions.addQuestions(data.questions));
      toast.success("تم اضافة سؤال");
      setState(true);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Apply EXCEL;
export const ExcelFile = (setState, Lesson, Unit, Subject, infoQuestion) => {
  return async (dispatch) => {
    try {
      const { data } = await request.post(
        `/upload-questions?lesson=${Lesson}&unit=${Unit}&subject=${Subject}`,
        infoQuestion
      );
      console.log(data);
      dispatch(dataActions.addQuestions(data.questions));
      toast.success("تم رفع الملف");
      setState(true);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Edit Questions:
export const EditQuestions = (setState, IdQuestion, infoQuestion) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.put(`/questions/${IdQuestion}`, infoQuestion);
      toast.success("تم تعديل سؤال");
      setState(true);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Delelte Questions:
export const DeleteQuestions = (setOpen, IdQuestion) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.delete(`/questions/${IdQuestion}`);
      dispatch(dataActions.deleteQuestions(IdQuestion));
      toast.success("تم حذف السؤال");
      setOpen(true);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Units:
//Get Units:
export const GetUnits = (token, value, page, perpage) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get(
        `/units/admins?subjectId=${value}&page=${page}&perPage=${perpage}`,
        {
          headers: { Authorization: `Bearar ${token}` },
        }
      );
      dispatch(dataActions.getUnits(data.units));
      return data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      return error;
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Add Units:
export const AddUnits = (setState, infoUnit) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      const { data } = await request.post("/units", infoUnit);
      console.log(data);
      dispatch(dataActions.addUnits(data.unit));
      toast.success("تمت اضافة وحدة");
      setState(true);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Edit Units:
export const EditUnits = (setState, IdUnits, infoUnit) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.put(`/units/${IdUnits}`, infoUnit);
      toast.success("تمت تعديل الوحدة");
      setState(true);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Delete Units:
export const DeleteUnits = (setOpen, IdUnits) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.delete(`/units/${IdUnits}`);
      dispatch(dataActions.deleteUnits(IdUnits));
      setOpen(false);
      toast.success(`تم حذف الوحدة`);
    } catch (error) {
      console.error(error);
      setOpen(false);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Lesson:
//Get Lessons:
export const GetLessons = (UnitID, page, perpage) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get(
        `/lessons?unitId=${UnitID}&page=${page}&prePage=${perpage}`
      );
      dispatch(dataActions.getLessons(data.lessons));
      return data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      return error;
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Add Lessons:
export const AddLessons = (setState, infoLesson) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      const { data } = await request.post("/lessons", infoLesson);
      dispatch(dataActions.addLessons(data.lesson));
      toast.success("تمت اضافة الدرس");
      setState(true);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Edit Lessons:
export const EditLessons = (setState, IdLesson, infoLesson) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.put(`/lessons/${IdLesson}`, infoLesson);
      toast.success("تمت تعديل الدرس");
      setState(true);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Delete Lessons:
export const DeleteLessons = (setOpen, IdLesson) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.delete(`/lessons/${IdLesson}`);
      dispatch(dataActions.deleteLessons(IdLesson));
      setOpen(false);
      toast.success("تمت حذف الدرس");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Notifcation:
//Get Message:
export const GetMessage = (page, perPage) => {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `message/user/65d072654431309a218d052c`
      );
      console.log(data);
      dispatch(dataActions.getMessage(data.message));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Delete Message:
export const DeleteMessage = (IdMessage) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      await request.delete(`/message/${IdMessage}`);
      dispatch(dataActions.deleteMessage(IdMessage));
      // setOpen(false);
      toast.success("تمت حذف الرسالة");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Notifcation:
//Get Notifcation:
export const GetNotifcation = () => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get("/notifications");
      console.log(data);
      dispatch(dataActions.getNotification(data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

export const PostNotifcation = (infoNotification) => {
  return async (dispatch) => {
    dispatch(dataActions.setDelete());
    try {
      const { data } = await request.post("/notifications", infoNotification);
      console.log(data);
      dispatch(dataActions.addNotification(data));
      toast.success("تمت اضافة إشعار");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(dataActions.setDelete());
    }
  };
};

//Sides:
//Get All Sides:
export const GetSides = () => {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/sides`);
      dispatch(dataActions.getSides(data.side));
    } catch (error) {
      console.log(error);
    }
  };
};

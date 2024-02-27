import { request } from "../../utils/request";
import { dataActions } from "../slices/subscribersSlice";
import { toast } from "react-toastify";

//Admin:
//Get All Admins:
export const GetAdmins = () => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get(`/users/profile/admin`);
      dispatch(dataActions.getAdmins(data.admins));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Login Admin:
export const AdminLogin = (_state, setState, error, setErorr, userData) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.post(`/auth/login_admin`, userData);
      console.log(data);
      dispatch(dataActions.login(data));
      setState(true);
      setErorr(null);
    } catch (error) {
      console.log(error.message);
      setErorr(error);
    } finally {
      dispatch(dataActions.setLoading());
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
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Add Users:
export const AddUsers = (infoUser) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.post("/auth/register", infoUser);
      dispatch(dataActions.addUsers(data.users));
      toast.success(`تمت اضافة مستخدم`);
    } catch (error) {
      console.log(error);
      toast.error(`تعذر اضافة مستخدم`);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Delete Users:
export const DeleteUsers = (setOpen, IdUser, token) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      await request.delete(`/users/profile/${IdUser}`, {
        headers: { Authorization: `Bearar ${token}` },
      });
      dispatch(dataActions.deleteUsers(IdUser));
      toast.success(`تم حذف مستخدم`);
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error(`تعذر حذف مستخدم`);
      setOpen(false);
    } finally {
      dispatch(dataActions.setLoading());
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
      dispatch(dataActions.getCountCodes(data.totalCount));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};
//Delete Code:
export const DeleteCode = (setOpen, IdCode) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      await request.delete(`/codes/${IdCode}`);
      dispatch(dataActions.deleteCode(IdCode));
      toast.success(`تم حذف الكود`);
      setOpen(false);
      // handle the response as needed
    } catch (error) {
      console.error(error);
      toast.error(`تعذر حذف الكود`);
      setOpen(false);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};
//Download QR:
export const DownlaodQR = (setDownload, codeNumber) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
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
      toast.error("لم يتم تحميل الكود");
      setDownload(false);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Centers:
//Get All Centers:
export const GetCenters = () => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get("/centers");
      dispatch(dataActions.getCenters(data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Post Center:
export const AddCenter = (setState, infoCenter) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.post("/centers", infoCenter);
      dispatch(dataActions.addCenter(data.center));
      toast.success(`تمت اضافة مركز`);
      setState(true);
      // handle the response as needed
    } catch (error) {
      console.error(error);
      toast.error(`تعذر اضافة مركز`);
    } finally {
      dispatch(dataActions.setLoading());
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
    dispatch(dataActions.setLoading());
    try {
      await request.put(`/centers/${IdCenter}`, infoCenterEdit);
      setState(true);
      setErorr(null);
    } catch (error) {
      console.log(error);
      setErorr(error);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Delete Center:
export const DeleteCenter = (setOpen, IdCenter) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      await request.delete(`/centers/${IdCenter}`);
      dispatch(dataActions.deleteCenters(IdCenter));
      setOpen(false);
      toast.success(`تم حذف مركز`);
    } catch (error) {
      console.error(error);
      setOpen(false);
      toast.error(`تعذر حذف مركز`);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Subject:

//Get All Subjects:
export const GetSubjects = (side) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get(`/subjects?side=${side}`);
      dispatch(dataActions.getSubjects(data.subjects));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Add Subjects:
export const AddSubject = (setState, infoSubject) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.post("/subjects", infoSubject);
      dispatch(dataActions.addSubject(data.subjects));
      setState(true);
      toast.success(`تمت اضافة مادة`);
    } catch (error) {
      console.log(error);
      toast.error(`تعذر اضافة مادة`);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Delete Subject:
export const DeleteSubject = (setOpen, IdSubject) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      await request.delete(`/subjects/${IdSubject}`);
      dispatch(dataActions.deleteSubject(IdSubject));
      setOpen(false);
      toast.success(`تم حذف المادة`);
    } catch (error) {
      console.error(error);
      setOpen(false);
      toast.success(`تم حذف المادة`);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};

//Question:

//Get Question:
export const GetQuestions = () => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      const { data } = await request.get(`/questions`);
      dispatch(dataActions.getQuestion(data.questions));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};
export const DeleteQuestions = (
  state,
  setState,
  error,
  setError,
  IdQuestion
) => {
  return async (dispatch) => {
    dispatch(dataActions.setLoading());
    try {
      await request.delete(`/questions/${IdQuestion}`);
      dispatch(dataActions.deleteQuestions(IdQuestion));
      setState(true);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      dispatch(dataActions.setLoading());
    }
  };
};
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

import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: "users",
  initialState: {
    userInfo: null,
    admins: [],
    users: [],
    countUsers: 0,
    subjects: [],
    lessons: [],
    units: [],
    centers: [],
    codes: [],
    countCodes: 0,
    packages: [],
    sides: [],
    questions: [],
    messages: [],
    notification: [],
    loading: false,
    delete: false,
  },
  reducers: {
    //ADMIN:
    getAdmins: (state, action) => {
      state.admins = action.payload;
    },
    addAdmin: (state, action) => {
      state.admins.push(action.payload);
    },
    deleteAdmin: (state, action) => {
      const ID = action.payload;
      state.admins = state.admins.filter((admin) => admin._id !== ID);
    },
    login: (state, action) => {
      state.userInfo = action.payload;
    },

    //USERS:
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    addUsers: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUsers: (state, action) => {
      const ID = action.payload;
      state.users = state.users.filter((user) => user._id !== ID);
    },
    getCountUsers: (state, action) => {
      state.countUsers = action.payload;
    },

    //CODES:
    getCodes: (state, action) => {
      state.codes = action.payload;
    },
    addCode: (state, action) => {
      state.codes.push(action.payload);
    },
    deleteCode: (state, action) => {
      const ID = action.payload;
      state.codes = state.codes.filter((code) => code.id !== ID);
    },
    getCountCodes: (state, action) => {
      state.countCodes = action.payload;
    },

    //PACKAGES:
    getPackages: (state, action) => {
      state.packages = action.payload;
    },
    addPackage: (state, action) => {
      state.packages.push(action.payload);
    },
    deletePackage: (state, action) => {
      const ID = action.payload;
      state.packages = state.packages.filter((packge) => packge._id !== ID);
    },

    //CENTERS:
    getCenters: (state, action) => {
      state.centers = action.payload;
    },
    addCenter: (state, action) => {
      state.centers.push(action.payload);
    },
    deleteCenters: (state, action) => {
      const ID = action.payload;
      state.centers = state.centers.filter((center) => center._id !== ID);
    },

    //SUBJECT:
    getSubjects: (state, action) => {
      state.subjects = action.payload;
    },
    addSubject: (state, action) => {
      state.subjects.push(action.payload);
    },
    deleteSubject: (state, action) => {
      const ID = action.payload;
      state.subjects = state.subjects.filter((subject) => subject._id !== ID);
    },

    //Units:
    getUnits: (state, action) => {
      state.units = action.payload;
    },
    addUnits: (state, action) => {
      state.units.push(action.payload);
    },
    deleteUnits: (state, action) => {
      const ID = action.payload;
      state.units = state.units.filter((unit) => unit._id !== ID);
    },
    //LESSONS:
    getLessons: (state, action) => {
      state.lessons = action.payload;
    },
    addLessons: (state, action) => {
      state.lessons.push(action.payload);
    },
    deleteLessons: (state, action) => {
      const ID = action.payload;
      state.lessons = state.lessons.filter((lesson) => lesson._id !== ID);
    },

    //QUESTIONS:
    getQuestion: (state, action) => {
      state.questions = action.payload;
    },
    addQuestions: (state, action) => {
      state.questions.push(action.payload);
    },
    deleteQuestions: (state, action) => {
      const ID = action.payload;
      state.questions = state.questions.filter(
        (question) => question._id !== ID
      );
    },

    //MESSAGE:
    getMessage: (state, action) => {
      state.messages = action.payload;
    },
    deleteMessage: (state, action) => {
      const ID = action.payload;
      state.messages = state.messages.filter((message) => message._id !== ID);
    },

    //NOTIFICATION:
    getNotification: (state, action) => {
      state.notification = action.payload;
    },
    addNotification: (state, action) => {
      state.notification.push(action.payload);
    },
    //SIDES:
    getSides: (state, action) => {
      state.sides = action.payload;
    },

    //LOADING:
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    //DELTE:
    setDelete: (state) => {
      state.delete = !state.delete;
    },
  },
});
const dataActions = usersSlice.actions;
const userReducer = usersSlice.reducer;

export { dataActions, userReducer };

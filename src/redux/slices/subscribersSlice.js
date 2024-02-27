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
    centers: [],
    codes: [],
    countCodes: 0,
    packages: [],
    sides: [],
    questions: [],
    loading: false,
  },
  reducers: {
    //ADMIN:
    getAdmins: (state, action) => {
      state.admins = action.payload;
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
      state.packages = state.packages.filter((packge) => packge.id !== ID);
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
    //SIDES:
    getSides: (state, action) => {
      state.sides = action.payload;
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

    //LESSONS:
    getLessons: (state, action) => {
      state.lessons = action.payload;
    },
    addLessons: (state, action) => {
      state.lessons.push(action.payload);
    },
    deleteLessons: (state, action) => {
      const ID = action.payload;
      state.lessons = state.lessons.filter((lesson) => lesson.id !== ID);
    },

    //QUESSTIONS:
    getQuestion: (state, action) => {
      state.questions = action.payload;
    },
    deleteQuestions: (state, action) => {
      const ID = action.payload;
      state.questions = state.questions.filter(
        (question) => question._id !== ID
      );
    },
    //LOADING:
    setLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});
const dataActions = usersSlice.actions;
const userReducer = usersSlice.reducer;

export { dataActions, userReducer };

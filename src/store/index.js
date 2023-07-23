import { configureStore } from "@reduxjs/toolkit";
import { usersReducer,addUser,deleteUser } from "./Slices/userSlice";
import { adminReducer,adminAddUser, adminDeleteUser,adminEditeUserRole,updateAdminPassword } from "./Slices/adminSlice";
import { hrReducer,toggleStatus,updateUserStatus } from "./Slices/hrSlice";

const store=configureStore({
    reducer:{
        users:usersReducer,
        admin:adminReducer,
        hr:hrReducer
    }
})



export{store,addUser,deleteUser,adminAddUser, adminDeleteUser,adminEditeUserRole,toggleStatus,updateUserStatus,updateAdminPassword}
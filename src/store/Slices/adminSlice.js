import {createSlice} from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        adminData: [
            {
              email: "admin@gmail.com",
              password: "12345",
            },
          ],
        users: [
            {
                id: 1,
                name: "Shuhaib",
                phone: 9544562148,
                role: "admin"
            },
            {
                id: 2,
                name: "shahid",
                phone: 9876784569,
                role: "user"
            },
            {
                id: 3,
                name: "shahzad",
                phone: 9867475412,
                role: "user"
            },
            {
                id: 4,
                name: "anees",
                phone: 9544213567,
                role: "admin"
            }, {
                id: 5,
                name: "junaid",
                phone: 9544452987,
                role: "admin"
            }, {
                id: 6,
                name: "jamal",
                phone: 9544452987,
                role: "user"
            },  {
                id: 7,
                name: "shakeer",
                phone: 9589462548,
                role: "user"
            },  {
                id: 8,
                name: "jabir",
                phone: 986749854,
                role: "user"
            },  {
                id: 9,
                name: "Hamdan",
                phone: 8547286549,
                role: "user"
            },  {
                id: 10,
                name: "Rashid",
                phone: 9869856324,
                role: "user"
            },  {
                id: 11,
                name: "Jibreel",
                phone: 98675689452,
                role: "user"
            },  {
                id: 12,
                name: "shahzad",
                phone: 9867475412,
                role: "user"
            },  {
                id: 13,
                name: "Jabbar",
                phone: 9867475412,
                role: "user"
            },
        ]
    },
    reducers: {
        adminAddUser: (state, action) => {
            state.data.push(action.payload);
            alert('New user is added');
        },
        adminDeleteUser: (state, action) => {
            const userId = action.payload;
            console.log(action.payload)
            state.users = state.users.filter((user) => user.id !== userId);
            alert(`Delete user with ID: ${userId}`);
          },
        adminEditeUserRole: (state, action) => {
            const userId = action.payload;
            const user = state.users.find((user) => user.id === userId);
            if (user) {
                user.role = user.role === 'admin' ? 'user' : 'admin';
            }
            alert(`Change user role`);

        },updateAdminPassword: (state, action) => {
            const { email, newPassword } = action.payload;
            const foundAdmin = state.adminData.find((admin) => admin.email === email);
            if (foundAdmin) {
              foundAdmin.password = newPassword;
              alert('Password changed successfully!');
            } else {
              alert('Admin email not found. Password not changed.');
            }
          },


    }
})

export const {adminAddUser, adminDeleteUser, adminEditeUserRole,updateAdminPassword} = adminSlice.actions;
export const adminReducer = adminSlice.reducer

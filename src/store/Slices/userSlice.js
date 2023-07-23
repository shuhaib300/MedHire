import {createSlice} from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [
            {
                id:1,
                firstname:'Shuhaib',
                lastname:"a",
                mobile:9544265894,
                email:"shuhaib@gmail.com",
                password:"12345",
                address:"Dubai",
                Education:"msc",
                work:[{
                    jobtitle:'full stack',
                    company:"mixup",
                    startdate:"11/11/2021",
                    enddate:"12/12/2022"
                },{
                    jobtitle:'font end developer',
                    company:"micro",
                    startdate:"12/12/2022",
                    enddate:"14/1/2023"
                },

            ],
            techinical_skill:["node","git","react","javascript"],
            cv:null,
            } ,
            {
                id:2,
                firstname:'shameem',
                lastname:"k",
                email:"shameem@gmail.com",
                password:"12345",
                mobile:9544345678,
                address:"Sharjah",
                Education:"b-tech",
                work:[{
                    jobtitle:'node developer',
                    company:"google",
                    startdate:"13/11/2021",
                    enddate:"12/12/2022"
                },{
                    jobtitle:'font end developer',
                    company:"micro",
                    startdate:"12/12/2022",
                    enddate:"14/1/2023"
                },

            ],
            techinical_skill:["node","git","react","javascript"],
            cv:null,
            },  {
                id:3,
                firstname:'Junaid',
                lastname:"a",
                mobile:9544265259,
                email:"junaid@gmail.com",
                password:"12345",
                address:"Dubai",
                Education:"msc",
                work:[{
                    jobtitle:'Blockchain developer',
                    company:"mixup",
                    startdate:"11/11/2021",
                    enddate:"12/12/2022"
                },{
                    jobtitle:'font end developer',
                    company:"micro",
                    startdate:"12/12/2022",
                    enddate:"14/1/2023"
                },

            ],
            techinical_skill:["node","git","react","javascript"],
            cv:null,
            },  {
                id:4,
                firstname:'Anees',
                lastname:"a",
                mobile:9544265894,
                email:"anees@gmail.com",
                password:"12345",
                address:"Dubai",
                Education:"msc",
                work:[{
                    jobtitle:'front-end developer',
                    company:"mixup",
                    startdate:"11/11/2021",
                    enddate:"12/12/2022"
                },{
                    jobtitle:'font end developer',
                    company:"micro",
                    startdate:"12/12/2022",
                    enddate:"14/1/2023"
                },

            ],
            techinical_skill:["node","git","react","javascript"],
            cv:null,
            }
        ]
    },
    reducers: {
        addUser: (state, action) => {
            state.data.push(action.payload);
            alert("New user is added")
        },
        deleteUser: (state, action) => {
            const email = action.payload;
            state.users = state.data.filter((user) => user.email !== email);
            alert("User is deleted");
          },
    },
})


export const {addUser,deleteUser} = userSlice.actions;
export const usersReducer = userSlice.reducer

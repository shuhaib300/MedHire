import {createSlice} from "@reduxjs/toolkit";
 

const hrSlice=createSlice({
    name:"hrData",
    initialState:{
        hr:{
            email:"hr@gmail.com",
            password:"12345"
        },
       data:[
            {
                id:1,
                firstname:'Shahid',
                lastname:"m k",
                mobile:9546548971,
                email:"shahid@gmail.com",
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
            status:false,
            notification:[]
            } ,
            {
                id:2,
                firstname:'Shameem',
                lastname:"k",
                email:"shameem@gmail.com",
                password:"12345",
                mobile:954879451,
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
            status:false,
            notification:[]
            },  {
                id:3,
                firstname:'Anees',
                lastname:"m k",
                mobile:9546548971,
                email:"Anees@gmail.com",
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
            status:false,
            notification:[]
            },  {
                id:4,
                firstname:'Junaid',
                lastname:"m k",
                mobile:9546548971,
                email:"junaid@gmail.com",
                password:"12345",
                address:"Dubai",
                Education:"msc",
                work:[{
                    jobtitle:'AI Developer',
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
            status:false,
            notification:[]
            },
        ]
    },
    reducers:{
        toggleStatus: (state, action) => {
            const userId = action.payload;
            state.data = state.data.map((user) =>
              user.id === userId ? { ...user, status: !user.status } : user
            );
          },
          updateUserStatus: (state, action) => {
            const { userId, message } = action.payload;
            state.data = state.data.map((user) =>
              user.id === userId
                ? { ...user, notification: [...user.notification, message] }
                : user
            );
            alert('message send')
          },
    }
})
export const { toggleStatus,updateUserStatus } = hrSlice.actions;
export const hrReducer=hrSlice.reducer
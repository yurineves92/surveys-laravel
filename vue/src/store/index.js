import { createStore } from 'vuex';
import axiosClient from '../axios';

const tmpSurveys = [
    {
        id: 100,
        title: "The Example Title",
        slug: "the-example-title",
        status: "draft",
        image: "https://i.ibb.co/g9gGYPX/avatar-g177d581fb-800.png",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        created_at: "2022-03-17 11:10:00",
        updated_at: "2022-03-17 11:10:00",
        expire_date: "2022-03-28 17:10:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you?",
                description: null,
                data: {
                    options: [
                        { 
                            uuid: "6b88cc72-a5fc-11ec-b909-0242ac120002",
                            text: "USA"
                        },
                        { 
                            uuid: "6b88cc72-a543434-43434-34343-4343-434",
                            text: "Georgia"
                        },
                        { 
                            uuid: "6b884343434343434334343434",
                            text: "Brazil"
                        },
                        { 
                            uuid: "6b4343434343",
                            text: "Portugal"
                        },
                    ]
                }
            },
            {
                id: 2,
                type: "checkbox",
                question: "From which country are you 2?",
                description: null,
                data: {
                    options: [
                        { 
                            uuid: "6b88cc72-a5fc-11ec-b909-0242ac120002",
                            text: "USA"
                        },
                        { 
                            uuid: "6b88cc72-a543434-43434-34343-4343-434",
                            text: "Georgia"
                        },
                        { 
                            uuid: "6b884343434343434334343434",
                            text: "Brazil"
                        },
                        { 
                            uuid: "6b4343434343",
                            text: "Portugal"
                        },
                    ]
                }
            },
            {
                id: 3,
                type: "select",
                question: "From which country are you 3?",
                description: null,
                data: {
                    options: [
                        { 
                            uuid: "6b88cc72-a5fc-11ec-b909-0242ac120002",
                            text: "USA"
                        },
                        { 
                            uuid: "6b88cc72-a543434-43434-34343-4343-434",
                            text: "Georgia"
                        },
                        { 
                            uuid: "6b884343434343434334343434",
                            text: "Brazil"
                        },
                        { 
                            uuid: "6b4343434343",
                            text: "Portugal"
                        },
                    ]
                }
            },
            {
                id: 4,
                type: "radio",
                question: "From which country are you?",
                description: null,
                data: {
                    options: [
                        { 
                            uuid: "6b88cc72-a5fc-11ec-b909-0242ac120002",
                            text: "USA"
                        },
                        { 
                            uuid: "6b88cc72-a543434-43434-34343-4343-434",
                            text: "Georgia"
                        },
                        { 
                            uuid: "6b884343434343434334343434",
                            text: "Brazil"
                        },
                        { 
                            uuid: "6b4343434343",
                            text: "Portugal"
                        },
                    ]
                }
            },
            {
                id: 5,
                type: "text",
                question: "From which country are you?",
                description: null,
                data: {}
            },
            {
                id: 6,
                type: "textarea",
                question: "From which country are you?",
                description: null,
                data: {}
            }
        ]
    }
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN')
        },
        surveys: [...tmpSurveys]
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            return axiosClient.post('/register', user)
            .then(({data}) => {
                commit('setUser', data);
                commit('setToken', data.token);
                return data;
            });
        },
        login({ commit }, user) {
            return axiosClient.post('/login', user)
              .then(({data}) => {
                commit('setUser', data.user);
                commit('setToken', data.token);
                return data;
            });
        },
        logout({ commit }, user) {
            return axiosClient.post('/logout', user)
            .then(({response}) => {
                commit('logout')
                return response;
            });
        }
    },
    mutations: {
        logout: state => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem('TOKEN')
        },
        setUser: (state, user) => {
            state.user.data = user;
        },
        setToken: (state, token) => {
            state.user.token = token;
            sessionStorage.setItem('TOKEN', token);
        },
    },
    modules: {}
});

export default store;
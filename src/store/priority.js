export default {
    state: {
        priorityList: ['Low', 'Medium', 'High'],
    },
    mutations: {},
    actions: {},
    getters: {
        getPriorityList(state) {
            return state.priorityList

        }
    }
}
export default {
    state: {
        notesList: [
            {
                id: 1,
                title: "First Note",
                description: "Description for first note",
                type: "Low",
                changeTitle: false,
                date: new Date(Date.now()).toLocaleString(),
            },
            {
                id: 2,
                title: "Second Note",
                description: "Description for second note",
                type: "Medium",
                changeTitle: false,
                date: new Date(Date.now()).toLocaleString()

            },
            {
                id: 3,
                title: "Third Note",
                description: "Description for third note",
                type: "High",
                changeTitle: false,
                date: new Date(Date.now()).toLocaleString()
            }
        ],
        note: {
            title: '',
            description: "",
            type: 0,
        },
        oldTitle: null,
        filterNotesList:null
    },
    mutations: {
        addNote(state, payload) {
            let {title, description, type} = payload;
            state.notesList.push({
                title,
                description,
                type,
                changeTitle: false,
                date: new Date(Date.now()).toLocaleDateString()
            });
            state.note.title = '';
            state.note.description = '';
            state.note.type = 0;
        },
        removeNote(state, index) {
            state.notesList.splice(index, 1);
        },
        showInput(state, index) {
            for (let i = 0; i < state.notesList.length; i++) {
                state.notesList[i].changeTitle = false;
            }
            state.notesList[index].changeTitle = true;
            state.oldTitle = state.notesList[index].title;
        },
        changeTitle(state, index) {
            if (state.notesList[index].title === '') {
                alert("Title can't be blank!");
                return false;
            }
            state.notesList[index].date = new Date(Date.now()).toLocaleDateString()
            state.notesList[index].changeTitle = false;
            state.oldTitle = null;
        },
        titleOld(state, index) {
            state.notesList[index].changeTitle = false;
            state.notesList[index].title = state.oldTitle;
            state.oldTitle = null;
        },
        notesFilter(state, payload) {
            let array = state.notesList,
                search = payload.search,
                type = payload.type;
            if (type != 'all') {
              array = array.filter(function (item) {
                if (search) {
                  // Small
                  search = search.trim().toLowerCase();
                  //Filter
                  if (item.type.toLowerCase().indexOf(type) !== -1 && item.title.toLowerCase().indexOf(search) !== -1) {
                    return item
                  }
                } else {
                  //Filter
                  if (item.type.toLowerCase().indexOf(type) !== -1) {
                    return item
                  }
                }
              })
            } else {
              if (!search) return array;
              // Small
              search = search.trim().toLowerCase();
              //Filter
              array = array.filter(function (item) {
                if (item.title.toLowerCase().indexOf(search) !== -1) {
                  return item
                }
              })
            }
            state.filterNotesList = array;
        },

    },
    actions: {
        addNote({commit}, payload) {
            commit("addNote", payload);
        },
        removeNote({commit}, index) {
            commit("removeNote", index);
        },
        showInput({commit}, index) {
            commit("showInput", index);
        },
        changeTitle({commit}, index) {
            commit("changeTitle", index);
        },
        titleOld({commit}, index) {
            commit("titleOld", index);
        },
        returnText({commit}, text) {
            commit("returnText", text);
        },
        notesFilter({commit}, payload) {
            commit("notesFilter", payload);
        },
    },
    getters: {
        getNotesList(state) {
            return state.notesList
        },
        getNote: (state) => {
            return state.note
        },
        getNotesByFilter: (state) => {
            return state.filterNotesList;

        }

    },
}
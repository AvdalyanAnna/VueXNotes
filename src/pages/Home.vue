<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- message -->
        <message v-if="message" :message="message"/>

        <!-- new note -->
        <new-note
            :note="note"
            :types="priority"
            @addNote="addNote"/>


        <div class="note-header">
          <!-- title -->
          <h2> {{ title }} </h2>
          <div class="d-flex">
            <!-- search -->
            <search
                :value="search"
                placeholder="Find your Note"
                @inputKeyup="searchKeyUp"
                @search=" search = $event "/>

            <!-- type -->
            <filter-type
                :types="priority"
                @changeType="changeType"/>
          </div>


          <!-- icon content -->
          <div class="icons">
            <svg :class="{ active:grid }" @click="grid = true"
                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <svg :class="{ active: !grid }" @click="grid = false"
                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3" y2="6"></line>
              <line x1="3" y1="12" x2="3" y2="12"></line>
              <line x1="3" y1="18" x2="3" y2="18"></line>
            </svg>
          </div>
        </div>
        <!-- note list -->
        <notes
            :notes="notesFilter"
            :grid="grid"
            @showInput="showInput"
            @changeTitle="changeTitle"
            @oldTitle="titleOld"
            @remove="removeNote"/>
      </div>
    </section>
  </div>
</template>

<script>
import Message from "@/components/Message";
import NewNote from "@/components/NewNote";
import Notes from "@/components/Notes";
import Search from "@/components/Search";
import FilterType from "@/components/FilterType";

export default {
  name: 'App',
  data() {
    return {
      title: 'Notes App',
      selectValue: "all",
      search: '',
      grid: true,
      note: null,
      notes: null,
      priority: null,
      message: null,

    }
  },
  components: {
    Message,
    NewNote,
    Notes,
    Search,
    FilterType
  },
  created() {
    this.notes = this.$store.getters.getNotesList;
    this.priority = this.$store.getters.getPriorityList;
    this.note = this.$store.getters.getNote;
  },

  methods: {
    addNote(message) {
      if (typeof message == 'string') {
        this.message = message;
        return false
      }
      this.$store.dispatch('addNote', message)
    },

    removeNote(index) {
      this.$store.dispatch('removeNote', index)
    },

    showInput(index) {
      this.$store.dispatch('showInput', index)
    },

    changeTitle(index) {
      this.$store.dispatch('changeTitle', index)
    },

    titleOld(index) {
      this.$store.dispatch('titleOld', index)
    },

    changeType(selectValue) {
      this.selectValue = selectValue.toLowerCase();
      let array ={
        type:this.selectValue,
        search:this.search,
      }
      this.$store.dispatch('notesFilter', array)
    },
    searchKeyUp(){
      let array ={
        type:this.selectValue,
        search:this.search,
      }
      this.$store.dispatch('notesFilter', array)
    }
  },
  computed: {
    notesFilter() {
      let array = this.notes,
          search = this.search,
          type = this.selectValue;
      if (search != '') {
        return this.$store.getters.getNotesByFilter;
      }else if(type != 'all'){
        return this.$store.getters.getNotesByFilter;
      }else{
        return array;
      }
    }
  }

}
</script>

<style scoped>

</style>
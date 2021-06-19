<template>
  <!--    new note -->
  <div class="new-note">
    <label>Title</label>
    <input v-model="note.title" type="text">
    <label>Type</label>
    <select v-model="note.type">
      <option value="0">Choose type</option>
      <option v-for="(type,index) in types" :key="index"> {{ type }}</option>
    </select>

    <label>Description</label>
    <textarea v-model="note.description"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
export default {
  methods: {
    addNote() {
      if (this.note.title === '') {
        this.$store.dispatch('setError', "Title can't be blank!")
        return false;
      }

      if (this.note.type === 0) {
        this.$store.dispatch('setError', "Type not selected!")
        return false;
      }

      if (this.note.description === '') {
        this.$store.dispatch('setError', "Description can't be blank!")
        return false;
      }

      this.$store.dispatch('addNote', this.note)
    }
  },
  computed: {
    types(){
      return this.$store.getters.getPriorityList;
    },
    note(){
      return this.$store.getters.getNote;
    },
  }
}
</script>

<style lang="scss" scoped>
.new-note {
  text-align: center;
  .btn {
    margin: 20px 0;
  }
}

select {
  padding: 16px 26px;
  margin-bottom: 30px;
  border-radius: 20px;
  width: 100%;
  font-weight: normal;
}
</style>
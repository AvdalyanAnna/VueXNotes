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
  name: "NewNote",

  props: {
    note: {
      type: Object,
      required: true,
    },

    types: {
      type: Array,
      required: true,
    }
  },
  methods: {
    addNote() {
      let message = null;
      if (this.note.title === '') {
        message = "Title can't be blank!";
        this.$emit('addNote', message)
        return false;
      }

      if (this.note.type === 0) {
        message = "Type not selected!";
        this.$emit('addNote', message)
        return false;
      }

      if (this.note.description === '') {
        message = "Description can't be blank!";
        this.$emit('addNote', message)
        return false;
      }

      this.$emit('addNote', this.note)
    }
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
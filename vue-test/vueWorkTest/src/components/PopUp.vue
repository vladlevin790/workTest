<template>
  <section className="section-pop-up">
    <h2>Поля</h2>

    <input type="text" v-model="inputField">
    <input type="text" v-model="inputField2">
    <input type="text" v-model="inputField3">
    <input type="text" v-model="inputField4">
    <input type="text" v-model="inputField5">

    <button @click="send">Отправить</button>
  </section>
</template>

<script>
export default {
  name: "PopUp",
  props: {},
  data() {
    return {
      inputField: "",
      inputField2: "",
      inputField3: "",
      inputField4: "",
      inputField5: "",
    }
  },
  methods: {
    send() {
      let arr = [this.inputField, this.inputField2, this.inputField3, this.inputField4, this.inputField5];
      this.$emit('data', arr);
      this.$emit('close');
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <Button @click="showPopup = !showPopup">Начать</Button>
    <PopUp @data="set" ref="popupRef" v-show="showPopup" @close="closePopup"></PopUp>

    <div v-if="receivedData.length > 0">

      <p v-for="(item, index) in receivedData" :key="index">{{ item }}</p>

      <p v-if="jsonData">{{ jsonData }}</p>

      <div v-if="jsonContentVisible">
        <h2>JSON Content:</h2>
        <pre>{{ jsonData }}</pre>
      </div>

      <a v-if="jsonContentVisible" :href="jsonDownloadLink" download="data.json">Download JSON</a>

    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import PopUp from "./PopUp.vue";
import { ref } from "vue";

export default {
  name: "Main",
  components: {
    Button,
    PopUp,
  },
  data() {
    return {
      showPopup: ref(false),
      receivedData: [],
      jsonData: null,
      jsonContentVisible: false,
    };
  },
  computed: {
    jsonDownloadLink() {
      const jsonString = JSON.stringify(this.receivedData, null, 2);
      return `data:application/json;charset=utf-8,${encodeURIComponent(jsonString)}`;
    },
  },
  methods: {
    closePopup() {
      console.log("Closing PopUp");
      this.showPopup = false;
    },
    clickOutside(event) {
      const isButtonClicked = event.target.closest("button");
      const isInsidePopup = this.$refs.popupRef && this.$refs.popupRef.$el.contains(event.target);
      if (this.showPopup && this.$refs.popupRef && this.$refs.popupRef.$el && !isButtonClicked && !isInsidePopup) {
        this.closePopup();
      }
    },
    set(arr) {
      console.log("Data received:", arr);
      this.receivedData = arr;
      this.jsonData = JSON.stringify(this.receivedData, null, 2);
      this.jsonContentVisible = true;
    },
    saveToJson() {
      this.jsonContentVisible = false;

      const link = document.createElement("a");
      link.href = this.jsonDownloadLink;
      link.download = "data.json";
      link.click();
    },
  },
  mounted() {
    document.addEventListener("click", this.clickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.clickOutside);
  },
};
</script>

<style scoped>

</style>

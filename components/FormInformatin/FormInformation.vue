<template>
  <section>
    <div class="wrapper">
      <h1>name</h1>
      <v-text-field clearable label="name"></v-text-field>
      <h1>Company</h1>
      <v-text-field clearable label="Company"></v-text-field>
      <h1>Telephone number</h1>
      <v-text-field clearable label="Telephone number"></v-text-field>
      <h1>Email address*</h1>
      <v-text-field clearable label="Telephone number"></v-text-field>
      <h1>What is bidget ?</h1>
      <v-select
        label="Select"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        density="compact"
      ></v-select>
      <h1>How many people di you work with ?</h1>
      <v-select
        label="Select"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        density="compact"
      ></v-select>
      <h1>What best discribes company ?</h1>
      <v-select
        label="Select"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        density="compact"
      ></v-select>
      <h1>Message</h1>
      <v-textarea></v-textarea>
      <v-checkbox label="Accept privacy policy" color="primary" class="chek"></v-checkbox>
    </div>
    <div class="d-flex justify-center">
        <v-btn class="btn" color="primary" size="large">Submit</v-btn>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      ex4: 'primary'
 
    };
  },
};
</script>
<style >
.v-selection-control__input > .v-icon {
    color: var(--blue-500);
    opacity: 1;
}
.v-selection-control--inline .v-label {
    width: auto;
    opacity: 1;
    color: black;
}
</style>
<style scoped>
.btn {
    text-transform: none;
}
.wrapper {
    max-width: 800px;
    margin: 0 auto;
}
@media (max-width:768px) {
    .wrapper {
        margin-left: 24px !important;
        margin-right: 24px !important;
    }
}
@media (max-width:1024px) {
    .wrapper {
        margin-left: 40px;
        margin-right: 40px;
    }
}
@media (max-width:1280px) {
    .wrapper {
        max-width: 650px;
    }
}
</style>
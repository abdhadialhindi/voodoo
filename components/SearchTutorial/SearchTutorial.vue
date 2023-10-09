<template>
  <section>
    <v-row class="wrapper">
      <h1 class="title ms-15">Where can we help you with?</h1>
      <div class="d-flex ms-15 search">
        <div class="form">
        <v-text-field
          clearable
          label="eg accounts price ads"
          density="compact"
          variant="solo"
          single-line
          
        ></v-text-field></div>
        <v-btn color="primary" size="large" class="btn"> Search</v-btn>
      </div>
    </v-row>
  </section>
</template>
<style scoped>
.wrapper {
  display: block;
  max-width: 800px;
  margin: 0 auto;
}
.title {
  color: var(--blue-500);
  font-size: 32px;
  text-align: start;
}
.form {
    width: 500px !important;
    
}
.search {
    grid-gap: 36px;
    gap: 36px;
}
.btn {
    text-transform: none;
}
@media (max-width:768px) {
    .wrapper {
        margin-left: 24px !important;
        margin-right: 24px !important;
    }
     .search {
        flex-direction: column;
        grid-gap: 18px;
        gap: 18px;
    }
    .form {
        width: 100% !important;
    }
    .title {
        font-size: 18px;
        margin-bottom: 18px;
    }
}
@media (max-width:1024px) {
    
}
@media (max-width:1280px) {
    
}
</style>
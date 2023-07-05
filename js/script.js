const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [], 
      isLoad: false 
    }
  },
  created() {
    let sonoDieci = 0; 

    for (let i = 0; i < 10; i++) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          this.emails.push(response.data.response);

          sonoDieci++;
          if (sonoDieci === 10) {
            this.isLoad = true; 
          }
        });
    }
  }
}).mount('#app');

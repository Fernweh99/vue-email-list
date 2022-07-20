Vue.config.devtools = true;
const app = new Vue({
  name: 'app',
  el: "#root",
  data: {
    linkRandomMail: "https://flynn.boolean.careers/exercises/api/random/mail",
    numbersOfMail: 10,
    mails: [],
  },
  created(){
    for (let i = 0; i < 10; i++) {
      axios.get(this.linkRandomMail)
      .then(res=>{
        this.mails.push(res.data.response);
      })
    }
  }
})
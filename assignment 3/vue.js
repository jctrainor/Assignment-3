var app = new Vue({
  el: '#app',
  data: {
    message: 'Stay Logged in?',
    selected: '',
    uname: '',
    psw: '',
  },
  mounted() {
    if (localStorage.uname) {
      this.uname = localStorage.uname;
    }
    if (localStorage.psw) {
      this.psw = localStorage.psw;
    }
  },
  methods: {
    persist() { //function calls once button is pressed
      localStorage.uname = this.uname; //saves username locally
      localStorage.psw = this.psw; ////saves password locally
      console.log('user: ' + this.uname + ' saved'); //logs to the console that the button has been pressed(to save the username and password)
    }                                                 //prints the users, username, and states that it has been saved in console
  }
  })


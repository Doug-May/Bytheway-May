<template>
  <div>
      <section class="section section-dark">
         <div class="container text-center">
            <h1>CONTACT</h1>
               <h5 style="margin-top: -25px">EMAIL: BYTHEWAYMAY@GMAIL.COM</h5>
            <form id="contact-form">
               <div class="row">
                  <div class="col-md-6">
                     <div class="form-group center-block">
                        <h4>NAME</h4>
                        <input type="text" class="" id="inputName"  name="name" v-model="name">
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="form-group center-block">
                        <h4>EMAIL</h4>
                        <input type="email" class="" id="inputEmail" name="email" v-model="email" required pattern="[^ @]*@[^ @]*">
                     </div>
                  </div>
               </div>
               <div class="form-group center-block">
                  <h4>YOUR MESSAGE</h4>
                  <textarea id="inputMessage" name="message" v-model="message"></textarea>
               </div>
               <button id="emailButton" type="submit" class="" @click.prevent="submitContact"><h4>SUBMIT</h4></button>
            </form>
         </div>
      </section>

  </div>
</template>

<script>
const firebase = require("firebase");
const moment = require("moment");
import swal from "sweetalert2";
// Initialize Firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCHBYcG9zlIMR4rusCsGGVzG1QjUnEgBTQ",
  authDomain: "bytheway-may.firebaseapp.com",
  databaseURL: "https://bytheway-may.firebaseio.com",
  projectId: "bytheway-may",
  storageBucket: "bytheway-may.appspot.com",
  messagingSenderId: "444625286662"
};
firebase.initializeApp(config);
// reference messages collection
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);
const messagesRef = firebase.firestore().collection("messages");
export default {
  name: "Contact",
  data: function () {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    submitContact() {
      let time = moment().format("MMMM Do YYYY, h:mm:ss a");
      if (this.name === "" || this.email === "" || this.message === "") {
        // error message
        swal({
          toast: true,
          position: "bottom",
          showConfirmButton: false,
          timer: 3000,
          type: "error",
          title: "PLEASE COMPLETE THE FORM",
          customClass: "msgSwal"
        });
      } else {
        // success message
        const ex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!ex.test(this.email)) {
          swal({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 3000,
            type: "error",
            title: "INVALID EMAIL",
            customClass: "msgSwal"
          });
        } else {
          messagesRef.doc().set({
              name: this.name,
              email: this.email,
              message: this.message,
              time: time
            })
            .then(() => {
              swal({
                toast: true,
                position: "bottom",
                showConfirmButton: false,
                timer: 3000,
                type: "success",
                title: "MESSAGE SENT!",
                customClass: "msgSwal"
              });
            })
            .catch((err) => {
              swal({
                toast: true,
                position: "bottom",
                showConfirmButton: false,
                timer: 3000,
                type: "error",
                title: "AN ERROR OCCURED",
                customClass: "msgSwal"
              });
            });
          this.name = "";
          this.email = "";
          this.message = "";
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact-form h4 {
  text-align: left;
}

#inputName,
#inputEmail,
#inputMessage {
  border-radius: 5px;
  border-style: none;
  width: 100%;
  background-color: #e5e5e5;
  color: #5b5b5b;
  padding: 10px 10px;
  font-family: "Montserrat", sans-serif;
}

input:focus,
textarea:focus {
  outline: none;
}

#inputName,
#inputEmail {
  height: 35px;
}

#inputMessage {
  height: 120px;
  resize: vertical;
}

#emailButton {
  cursor: pointer;
  border-style: none;
  border-radius: 5px;
  width: 100%;
  background-color: #6f6f6f;
  color: #5b5b5b;
  padding: 5px 5px;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  margin-bottom: 50px;
}
#emailButton h4 {
  text-align: center;
}

#notify {
  z-index: 3;
  text-align: center;
  width: 300px;
  margin: auto;
  border-radius: 5px;
  padding: 1px 3px;
  margin-top: 20px;
}

.video {
  margin: auto;
  margin-top: 30px;
}

.video img {
  opacity: 1;
  transition: 200ms;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  margin: auto;
}

.video img:hover {
  opacity: 0.7;
}
.success {
  background-color: #7ba370;
}

.error {
  background-color: #9e6363;
}
</style>

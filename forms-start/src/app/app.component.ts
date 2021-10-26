import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-start';
  subscription = 'advanced'
  formsend = {
    mail: "",
    subscription: "",
    password: ""
  }

  formSubmited = false


  // onSubmit(form:NgForm ){
  //   console.log(form)
  // }


  onSubmit(myForm:NgForm){
    this.formSubmited = true;
    this.formsend.mail = myForm.value.email
    this.formsend.subscription = myForm.value.subscription
    this.formsend.password = myForm.value.password


    console.log(myForm)
    console.log(this.formsend)

  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signaupForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ""
    //   },
    //   secret: 'pet',
    //   questionAnswer: "",
    //   gender: "male"
    // })
    // this.signaupForm.form.patchValue({
    //   userData :{
    //     username: suggestedName
    //   }
    // })
  }
}

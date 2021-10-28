import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable,  } from 'rxjs/internal/observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'forms-start';
    projectStatusesList: string[] = ['Stable', 'Critical', 'Finished']
    projectForm: FormGroup;
    notAllwedProjects: string[] = ["Test", "Ovidiu"]


  ngOnInit(){
    this.projectForm = new FormGroup({
      // 'projectName': new FormControl(null, [Validators.required, this.projectValidators.bind(this)]),
      'projectName': new FormControl(null, [Validators.required], this.projectValidatorsAsinc),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    })
  }


  onSubmit(){
    console.log(this.projectForm)
  }


  projectValidators(component: FormControl): {[s:string]: boolean}{
    if(this.notAllwedProjects.indexOf(component.value) !== -1){
      return {"NotAllwedProject": true};
    }else{
      return null
    }
  }


  projectValidatorsAsinc(control:FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Test'){
          resolve({'ProjectNameForbiodden' : true})
        }else{
          resolve(null);
        }
      }, 1500)
    })
    return promise;
  }


// forbiddenEmail(control: FormControl): Promise<any> | Observable<any>{
//   const promise = new Promise<any>((resolve, reject) => {
//     setTimeout(() => {
//       if(control.value === 'test@test.com'){
//         resolve({'emailIsForbidden' : true})
//       }else{
//         resolve(null);
//       }
//     }, 1500)
//   })


  // genders = ['male', 'female']
  // forbiddenUserName = ['Chris', 'Anna']

  // signupForm: FormGroup

  // ngOnInit(){

  //   this.signupForm = new FormGroup({
  //     'userData': new FormGroup({
  //       'username': new FormControl(null, [Validators.required, this.userNameValidator.bind(this)]),
  //       'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail),
  //     }),
     
  //     'gender': new FormControl('male'),
  //     'hobbies': new FormArray([
        
  //     ])
  //   });

  //   // this.signupForm.valueChanges.subscribe(
  //   //   (value) => {console.log(value)}
  //   //   )
  //     // this.signupForm.statusChanges.subscribe(
  //     //   (value) => {console.log(value)}
  //     //   )

  //       this.signupForm.setValue({
  //         'userData': {
  //           'username': 'Max',
  //           'email': 'max@test.com'
  //         },
  //         'gender': 'female',
  //         'hobbies': []
  //       })


  // }
  // onSubmit(){
  //   console.log(this.signupForm);
  // }

  // onAddHobby(){
  //   (<FormArray>this.signupForm.get('hobbies')).push(new FormControl(null, Validators.required))
  // }



  // getControls(){
  //   return (<FormArray>this.signupForm.get('hobbies')).controls
  // }
  // //{forbidden: true} - example of the return of the function, as per the below notation for the return of function
  // userNameValidator(control: FormControl): {[s:string]: boolean}{
  //   if(this.forbiddenUserName.indexOf(control.value) !== -1){
  //     return {'nameIsForbidden': true}
  //   }else{
  //     return null;
  //   }
  // }


// forbiddenEmail(control: FormControl): Promise<any> | Observable<any>{
//   const promise = new Promise<any>((resolve, reject) => {
//     setTimeout(() => {
//       if(control.value === 'test@test.com'){
//         resolve({'emailIsForbidden' : true})
//       }else{
//         resolve(null);
//       }
//     }, 1500)
//   })

//   return promise
// }

  // onSubmit(form:NgForm ){
  //   console.log(form)
  // }

  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   this.signaupForm.setValue({
  //     userData:{
  //       username: suggestedName,
  //       email: ""
  //     },
  //     secret: 'pet',
  //     questionAnswer: "",
  //     gender: "male"
  //   })
  //   this.signaupForm.form.patchValue({
  //     userData :{
  //       username: suggestedName
  //     }
  //   })
  // }
}

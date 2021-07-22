import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users;
  reactiveForm:FormGroup;
  constructor(private auth:AuthService) {
    // this.auth.getUser().subscribe(usersList => {
    //   console.log(usersList);
    //   this.users = usersList;
    //   console.log(this.users);
    //   const login = this.users[1];
    //   localStorage.setItem("user",JSON.stringify(login))
      
    // })
   }

  

  ngOnInit(): void {

    this.reactiveForm = new FormGroup({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])
    })
    //   var array = ['sanjay','sachin','praveen','sahana']
    // console.log(array);
    // array.push('kavana');
    // console.log(array);

    // array.pop();
    
    // if(true) {
    //   var array = ['sanjay','sachin','praveen','sahana']
    //   console.log(array);
    // }
    // console.log(array);

  //   array.reverse();
  //   console.log(array);

  //   let array1 =  [1,2,3,4,5]
  //   console.log(array1);

  //   const newArray = array1.concat([6]);
  //   console.log(newArray);

  //   array.forEach((name) => {console.log(name) })

  //  const slice =  array.slice(1,2)
  //   console.log(slice);

  //   array.splice(-2,1,"sachin kumar","sanjay kumar")
  //   console.log(array);

  //   const shift = array.shift();
  //   console.log(shift);

  //    array.unshift('bhavitha');
  //   console.log(array);

  //   console.log( array.indexOf('sanjay kumar'));

  //   console.log(array.includes('sanjay'));

  //  let arrayObjects = [
  //    {id:1,name:'sanjay'},
  //    {id:2,name:'sachin'},
  //    {id:3,name:'praveen'},
  //    {id:4,name:'ganesha'}
  //  ] 

  //  const user = arrayObjects.find(items => items.id==2)
  //   console.log(`user id=${user.id} name=${user.name} `);


  //   const filteredUsers = arrayObjects.filter(item => item.id < 4)
  //   console.log(filteredUsers);

  // function sequenceSubscriber(observer: Observer<number>) {
  //   // synchronously deliver 1, 2, and 3, then complete
  //   observer.next(1);
  //   observer.next(2);
  //   observer.next(3);
  //   observer.complete();
  
  //   // unsubscribe function doesn't need to do anything in this
  //   // because values are delivered synchronously
  //   return { unsubscribe() {}   };
  // }

  const sequence = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
    
    // return {unsubscribe(){}}
  });

  sequence.subscribe({
    next(num) {console.log(num) },
    complete() {console.log('Finished sequence of log')}
  });
    
  }

  onSubmit(form){
    console.log(form.value);
    
  }

  onReactSubmit() {
    console.log(this.reactiveForm.value);
   }

}

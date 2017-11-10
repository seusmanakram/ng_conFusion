import { Component, OnInit,Inject} from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Comment} from '../shared/comment';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import {DishService} from '../services/dish.service';
import 'rxjs/add/operator/switchmap';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // @Input()
  dish : Dish;
  dishIds : number[];
  prev:number;
  next:number;
  errMess:string;

  commentForm: FormGroup;
  comment:Comment;
  formErrors = {
    
        'rating' :'',
        'comment' :'',
        'author': '',
        
      };


   constructor(private dishservice:DishService,
    private route: ActivatedRoute,
    private location:Location,
    private fb:FormBuilder,
    @Inject('BaseURL') private BaseURL
 
    
  ) { }

  ngOnInit() {
    this.createForm();
    this.dishservice.getDishIds()
      .subscribe(dishIds => this.dishIds = dishIds);
    
    this.route.params
      .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
    .subscribe(dish => {this.dish = dish;this.setPrevNext(dish.id); }, 
          errmess => this.errMess = <any>errmess );
   
     
  }


  setPrevNext(dishId:number){
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    
  }
  goBack(): void {

    this.location.back();

  }



  // createForm function definiton


  validationMessages = {
    
        'rating':{
          'required': 'Please rate the dish!',
        },
    
    
        'comment':{
          'required': 'Your feedback will be appreciated! Please comment in the Comment Box',
          'minlength': 'Last Name must be at least 2 characters long',
    
        },
    
        'author':{
          'required': 'Let us know your name',
          'minlength':'Author name must be at least 2 characters'
        },
    
    
    
      };
    


  createForm() {
    this.commentForm = this.fb.group({
      rating: [5,[Validators.required]],
      comment: ['',[Validators.required,Validators.minLength(5)]],
      author: ['',[Validators.required,Validators.minLength(2)]],
    });


    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));


    this.onValueChanged(); // reset form validation messages
  }



  onValueChanged(data?:any){
    if(!this.commentForm){return ;}
    const form = this.commentForm;
    for (const field in this.formErrors){
      this.formErrors[field] = '';
      const control = form.get(field);
      if(control && control.dirty && !control.valid){
        const messages = this.validationMessages[field];
        for(const key in control.errors){
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }

  }

  onSubmit() {
    
    
    // Comment Form submission and form reset
    this.comment = this.commentForm.value;
    console.log(this.comment);
    this.commentForm.reset({
      // 
      rating:'',
      comment:'',
      author:'',
    });

    var d = new Date();
    var current = d.toISOString();
    this.comment.date = current;





  }





}

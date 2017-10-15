import {Comment} from './comment';

export class Dish {

    // Properties associated with DISH will help construct menu 

    name:string; // typescript error checks the data type 
    image:string;
    category:string;
    label:string;
    price:string;
    description:string;
    comments:Comment[];

}
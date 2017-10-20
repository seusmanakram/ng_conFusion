// Structure of the class that represents 
// the data model corresponding  to the 
//form model that we are going to use for our angular application.

// For feedback form the user can submit for the restaurant

export class Feedback{
    firstname:string;
    lastname:string;
    telnumber:number;
    email:string;
    agree:boolean;
    contacttype:string;
    message:string;
}


export const ContactType =['None','Tel','Email'];
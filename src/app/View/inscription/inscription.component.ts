import { Component, OnInit } from '@angular/core';
import {demandePartenariat} from '../../Models/demandePartenariat';
import * as nodemailer from 'nodemailer'; 
    

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor() {     
    // this._transporter = nodemailer.createTransport( 
    // `smtps://<username>%40gmail.com:<password>@smtp.gmail.com`   ); 
  }

  ngOnInit(): void {
  }
  demande = new demandePartenariat();


  // private _transporter: nodemailer.Transporter; 
 
  // sendMail(to: string, subject: string, content: string) { 
  //   let options = { 
  //     from: 'from_test@gmail.com', 
  //     to: 'axelly.ly@gmail.com', 
  //     subject: subject, 
  //     text: content 
  //   } 
  //   this._transporter.sendMail(  
  //     options, (error, info) => { 
  //       if (error) { 
  //         return console.log(`error: ${error}`); 
  //       } 
  //       console.log(`Message Sent ${info.response}`); 
  //     }); 
  // } 

    demandeInscription(){

    console.log(this.demande);
    // this.sendMail("ds","bonsoir","aurevoir");
  }
}

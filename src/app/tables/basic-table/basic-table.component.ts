import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import {AlertController} from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {

  employees: any;

  constructor(private employeeService: EmployeeService, private alertCtrl: AlertController, private route: Router) {
    this.getEmployees();
  }

  ngOnInit() {
  }

  getEmployees() {
    this.employeeService.getEmployees("123").subscribe(res => {
      this.employees = res;
    });
  }

  deleteEmployee(id) {
    this.employeeService.deleteEmployee(id).subscribe(res => {
      this.employees = res;
      //this.route.navigate(['/tables/basic-table']);
      this.reloadData();
    });;
  }

  reloadData() {
    this.employees = this.getEmployees();
  }

  //Used for Confirmation message
  async presentConfirm(id) {
    let alert = await this.alertCtrl.create({
      //title: 'Confirm Items',
      header: 'Confirm Items',
      message: 'Do you want to remove this?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'icon-color',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          cssClass:'icon-color',
          handler: data => {
            console.log('Items Removed!');
            this.deleteEmployee(id);
            //Call you API to remove Items here.
          }
        }
      ]
    });
    await alert.present();
  }
  
  //Used for notification alert messages
  async infoAlert (){
    const  alert = await this.alertCtrl.create({
      header: 'Site Info!',
      subHeader: 'My name is Anil Singh.',
      buttons: ['Dismiss']
    });
    await alert.present();
  }

  async presentAlert() {
    console.log('Alert Event');
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

  editIconClick(url, id) {
    this.route.navigate([url, id]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { TestNativeService } from 'src/app/services/test-native.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.page.html',
  styleUrls: ['./ver-usuarios.page.scss'],
})
export class VerUsuariosPage implements OnInit {

  constructor(
    private testNativeService: TestNativeService,
    private alertController: AlertController,) { }

  ngOnInit() {
  }

  private users = new Array<any>();
  selectAllUsersNative() {
    this.testNativeService.selectAllUsers()
      .then(data => {
        console.log('Data recieved:');
        console.log(data);

        let rawData: string = data.data;
        let parsedData: any = JSON.parse(rawData);

        this.users = new Array<any>();

        for (let i of parsedData) {
          this.users.push(JSON.stringify(i));
        }

        this.showAlert('Success', 'Query successful!');
      })
      .catch(error => {
        console.error('Error encountered:');
        console.error(error);

        this.showAlert('Error', JSON.stringify(error));
      });

      
  }
  async showAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ["Ok"],
    });

    await alert.present();
  }

}

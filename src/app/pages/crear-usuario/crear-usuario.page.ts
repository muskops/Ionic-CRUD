import { Component, OnInit } from '@angular/core';
import { TestNativeService } from 'src/app/services/test-native.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  public user = {
    id:'',
    nombre:'',
  };

  constructor(
    private testNativeService:TestNativeService,
    private alertController:AlertController,
  ) { }

  ngOnInit() {
  }


  crearUsuario() {
    console.log('User: ' + JSON.stringify(this.user));

    this.testNativeService.createUser(this.user)
      .then(response => {
        console.log('Response recieved:');
        console.log(response);

        let data = JSON.parse(response.data);
        if (data.result == 'ok') {
          console.log(data.message);
          this.showAlert('Success', 'User created successfully');

          this.user.id = '';
          this.user.nombre = '';
        }
        else if (data.result == 'failed') {
          console.error(data.message);
          this.showAlert('Error', data.message);
        }
        else {
          console.error('Unknown error. Response is ' + JSON.stringify(data));
          this.showAlert('Error', 'Unknown error. Message is: ' + JSON.stringify(data));
        }
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

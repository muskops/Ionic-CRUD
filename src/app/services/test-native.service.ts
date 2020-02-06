import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestNativeService {

  constructor(
    private http: HTTP,
  ) { }

  
  


  createUser(user: any): Promise<any> {
    return this.http.post('http://192.168.1.72/QuerysPHP7/insert.php', user, {});
  }

  deleteUser(idParam: string): Promise<any> {
    return this.http.post('http://192.168.1.70/QuerysPHP7/querys.php', { id: idParam }, {});
  }

  selectAllUsers(): Promise<any> {
    return this.http.get('http://192.168.1.72/QuerysPHP7/querys.php', {}, {});
  }

  selectAllUsersOopExample(): Promise<any> {
    return this.http.get('http://192.168.1.70/QuerysPHP7/querys.php', {}, {});
  }
}

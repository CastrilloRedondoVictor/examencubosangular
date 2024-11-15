import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CubosService {

  private apiCubos= 'https://apitiendacubos2024a.azurewebsites.net/';

  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string): Observable<any> {
    let request = 'api/Manage/Login'
    return this.http.post<any>(this.apiCubos + request, { email, password })
  }

  register(nombre: string, email: string, pass: string): Observable<any> {
    let request = 'api/Manage/RegistroUsuario'
    return this.http.post<any>(this.apiCubos + request, { idUsuario:0, nombre, email, pass })
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isLogged(): boolean {
    return !!localStorage.getItem('access_token');
  }

  getCubos(): Observable<any> {
    let request = 'api/Cubos'
    return this.http.get(this.apiCubos + request)
  }

  getCubo(id: number): Observable<any> {
    let request = 'api/Cubos/' + id
    return this.http.get(this.apiCubos + request)
  }

  getPerfil(): Observable<any> {
    let request = 'api/Manage/PerfilUsuario'

    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.apiCubos + request, { headers })
  }

  getMarcas(): Observable<any> {
    let request = 'api/Cubos/Marcas'

    return this.http.get(this.apiCubos + request)
  }

  getCubosMarca(marca: string): Observable<any> {
    let request = 'api/Cubos/CubosMarca/' + marca

    return this.http.get(this.apiCubos + request)
  }

  getCompras(): Observable<any> {
    let request = 'api/Compra/ComprasUsuario'

    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.apiCubos + request, { headers })
  }

  postPedido(idCubo: number): Observable<any> {
    let request = 'api/Compra/InsertarPedido/' + idCubo

    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post(this.apiCubos + request, {}, { headers })
  }

  // getAlumnos(): Observable<any> {

  //   const token = this.getToken();
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });

  //   return this.http.get('https://apiejemplos.azurewebsites.net/api/Alumnos/AlumnosToken', { headers })
  // }

  // postAlumno(alumno: Alumno): Observable<any> {

  //   const token = this.getToken();
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`,
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.post('https://apiejemplos.azurewebsites.net/api/Alumnos/InsertAlumnoToken', JSON.stringify(alumno), { headers })
  // }
}

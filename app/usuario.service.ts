import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Usr}           from './usuario';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UsuarioService {
  constructor (private http: Http) {}

  private _usuarioUrl = 'http://localhost/users/list';

	/* AHERRERA: 
		Call to a restful web service to get the list of users using http get and suscribe method
	*/
  getUsers () {
	var observador = this.http.get(this._usuarioUrl)
                    .map(res => <Usr[]> res.json().usuarios) //<Usr[]> res.json().data
/*		    .do(data => console.log(data))*/
                    .catch(this.handleError);
	return observador;
  }

	/*
		AHERRERA:
		call to a restful web service to add user to the database
		its uses GET method for example purposes
		it must be changed to POST method
	*/
  addUser (name: string) : Observable<Usr>  {

    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    var url = 'http://localhost/users/add/'+name;
    /*return this.http.get(url, body, options)
                    .map(res =>  <Usr> res.json().usuario)
                    .catch(this.handleError)*/
    return this.http.get(url)
                    .map(res =>  <Usr> res.json().usuario)
                    .catch(this.handleError)
  }

	/*
		AHERRERA:
		call to a restful web service to delete a user from the database
		its uses GET method for example purposes
		it must be changed to DELETE method
	*/
   delUser(usuario: Usr) : Observable<Usr> {

	    let body = JSON.stringify({ usuario });
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });

    	    var url = 'http://localhost/users/delete/'+usuario.id;
	    return this.http.get(url)
                    .map(res =>  <Usr> res.json().usuario)
                    .catch(this.handleError)
   }
   
   /*
		AHERRERA:
		call to a restful web service to update user data on the database
		its uses GET method for example purposes
		it must be changed to PUT method
	*/
   updUser(usuario: Usr) : Observable<Usr> {

	    let body = JSON.stringify({ usuario });
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });

    	    var url = 'http://localhost/users/update/'+usuario.id+'/'+usuario.username;
	    return this.http.get(url)
                    .map(res =>  <Usr> res.json().usuario)
                    .catch(this.handleError)
   }


  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

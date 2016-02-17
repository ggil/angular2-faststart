import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS, Http, Request, RequestMethod} from 'angular2/http';
import {AfterViewChecked} from 'angular2/core';
import {Usr} from './usuario';
import {UsuarioService} from './usuario.service';
import {SpanEditableComponent} from './span-editable.component';

@Component({
    selector: 'usuario',
    template: `<h1>{{titulo}}</h1>
		<br />
		<div class="row">
		<div class="input-field col s6 m6 l6">
          		<i class="material-icons prefix">account_circle</i>
          		<input #nuevoU placeholder="UserName" id="icon_prefix" type="text" class="validate" (keyup.enter)="AgregarUsuario(nuevoU.value); nuevoU.value = ''">
          		<label for="icon_prefix">Nombre Usuario</label>
		</div>		
		<div class="col s4 m4 l4">
			<button class="waves-effect waves-light btn" (click)="AgregarUsuario(nuevoU.value); nuevoU.value = ''"><i class="material-icons left">done_all</i>Agregar</button>
		</div>
	</div>
		<br />
   		<table class="bordered">
		<thead>
			<tr>
				<th>id</th>
				<th>Nombre Usuario</th>
				<th>Creado</th>
				<th>Actualizado</th>
				<th>Accion</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngFor="#user of usuarios">
				<td>{{user.id}}</td>
				<td><span-editable [usuario_e]="user" (saved)="onSaved($event)"></span-editable><br /></td>
				<td>{{user.createdAt}}</td>
				<td>{{user.updatedAt}}</td>
				<td>
					<button class="waves-effect waves-light btn red" (click)="eliminarUsuario(user); nuevoU.value = ''"><i class="material-icons left">delete</i>Eliminar</button>
				</td>
			</tr>
		</tbody>
	</table>
	<br/>
	<br/>
	
		`,
	directives: [SpanEditableComponent]
})

export class UsuarioComponent implements AfterViewChecked, OnInit {
	public titulo = 'Sistema de Usuarios';
	usuarios: Usr[];
	errorMessage: string;

	/*
	AHERRERA:
	class constructor has injected the UsuarioService as parameter
	*/
	constructor (private _usuarioService: UsuarioService) {}

	ngAfterViewChecked() {
		// viewChild is updated after the view has been checked
		//console.log('AfterViewChecked: ');// + this.getMessage(this.viewChild));
	}

	/*
	AHERRERA:
	Method to get the list of users
	*/
	loadData()
	{
		var tmps = this._usuarioService.getUsers();
		tmps.subscribe(
                       lista => this.usuarios = lista,
                       error =>  this.errorMessage = <any>error);
	}

	/*
	AHERRERA
	Method to create a new user calling the usuario service component
	Requires a string parameter to define the name of the user
	*/
	AgregarUsuario(nuevoUsuario:string)
	{
		if (!nuevoUsuario)
		{
			return;
		}
		
		this._usuarioService.addUser(nuevoUsuario)
                     .subscribe(
                       usuario  => this.usuarios = usuario,
                       error =>  this.errorMessage = <any>error);
	}

	/*
	AHERRERA:
	Method to delete a user.
	Requires a parameter of type Usr.
	it uses the UsuarioService Component
	*/
	eliminarUsuario(usuario:Usr)
	{
		if (!usuario)
		{
			return;
		}
		
		this._usuarioService.delUser(usuario)
                     .subscribe(
                       usuario  => this.usuarios = usuario,
                       error =>  this.errorMessage = <any>error);
	}
	
	/*
	AHERRERA:
	Method to call when needs to update an user
	Requires a parameter of type Usr
	*/
	actualizarUsuario(usuario:Usr)
	{
		if (!usuario)
		{
			return;
		}
		
		this._usuarioService.updUser(usuario)
                     .subscribe(
                       usuario  => this.usuarios = usuario,
                       error =>  this.errorMessage = <any>error);
	}
	
	/*
	AHERRERA:
	Method to get called when the event saved is raised
	receives a parameter of type Usr to get data passed to the component
	*/
	onSaved (u: Usr)
	{
		this.actualizarUsuario(u);
	}

	/*
	AHERRERA:
	Method called when the component start
	the class must implement OnInit interface
	*/
	ngOnInit() {
		this.loadData();
	}
}

import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS, Http, Request, RequestMethod} from 'angular2/http';
import {AfterViewChecked} from 'angular2/core';
import {Usr} from './usuario';
import {UsuarioService} from './usuario.service';

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
				<td>{{user.username}}</td>
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
	
		`
})

export class UsuarioComponent implements AfterViewChecked, OnInit {
	public titulo = 'Sistema de Usuarios';
	usuarios: Usr[];
	errorMessage: string;

	constructor (private _usuarioService: UsuarioService) {}

	ngAfterViewChecked() {
		// viewChild is updated after the view has been checked
		//console.log('AfterViewChecked: ');// + this.getMessage(this.viewChild));
	}

	loadData()
	{
		var tmps = this._usuarioService.getUsers();
		tmps.subscribe(
                       lista => this.usuarios = lista,
                       error =>  this.errorMessage = <any>error);
	}

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

	ngOnInit() {
		this.loadData();
	}
}

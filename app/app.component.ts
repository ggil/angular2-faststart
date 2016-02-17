import {Component}         from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Documento} from './documento';
import {UsuarioComponent} from './usuario.component';
import {AfterViewChecked} from 'angular2/core';
import {UsuarioService}       from './usuario.service';
import {provide}           from 'angular2/core';
import {XHRBackend}        from 'angular2/http';
//import {InMemoryBackendService, SEED_DATA} from 'a2-in-memory-web-api/core';
import {UsuarioData}          from './usuario-data';

interface Empresa {
	rif: string;
	nombre: string;
}
/*
 AHERRERA:
 Componente raiz
 Contiene el componente inmerso <usuario>
 
*/
@Component({
    selector: 'my-app',
    template: `<!--<h1>{{titulo}}</h1>-->
		<br />
		<!--<h4></h4>
		<br />
		<div class="row">
			<div class="input-field col s6 m6 l6">
				<select>
					<option value="" disabled selected>Selecione...</option>
					<option *ngFor="#empresa of empresas"
						value="{{empresa.rif}}"
						(click)="onSelect(empresa)" >
						{{empresa.nombre}}
					</option>
				</select>
				<label>Seleccion de Empresa</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s12">
				<input placeholder="Nombre" id="first_name" type="text" class="validate">
				<label for="first_name">Nombre</label>
			</div>
		</div>
		<br />
		<div *ngIf="selectedE">
			<label>Indique las facturas del Proveedor: </label>{{selectedE.nombre}}
		</div>
		<br />-->
		<br />
		<usuario></usuario>
		`,
	directives: [UsuarioComponent],
	providers: [
		HTTP_PROVIDERS,
		UsuarioService //Proveedor de servicios de usuario
  ]
})

export class AppComponent implements AfterViewChecked {
	public titulo = 'Sistema de Retenciones';
	public empresas = EMPRESAS;
	public selectedE: Empresa;

	onSelect(empresa: Empresa) { this.selectedE = empresa;  }

	ngAfterViewChecked() {
		// contentChild is updated after the content has been checked
		$('select').material_select();
//		console.log('AfterViewInit: ' + this.getMessage(this.contentChild));
  }
}

/*
AHERRERA:
Array to simulate data
*/
var EMPRESAS: Empresa[] = [
	{ "rif": "J-1-0", "nombre":"Nortus, C. A." },
	{ "rif": "J-29840695-0", "nombre":"Gc Tech, C. A." },
	{ "rif": "J-21-0", "nombre":"Empresa 21" },
	{ "rif": "J-31-0", "nombre":"Empresa 31" }
];

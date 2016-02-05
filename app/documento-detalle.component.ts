import {Component, OnInit} from 'angular2/core';
import {Documento} from './documento';

@Component({
    selector: 'documento-detalle',
    template: `<table class="bordered">
			<thead>
				<tr>
					<th>Codigo</th>
					<th>Documento</th>
					<th>Monto</th>
				</tr>
			</thead>
			<tbody>
				<tr *ngFor="#documento of documentos">
					<td>{{documento.id}}</td>
					<td>{{documento.codigo}}</td>
					<td>{{documento.monto}}</td>
				</tr>
			</tbody>
		</table>`
})

export class DocumentoDetalleComponent implements OnInit {
	public documentos;
	public selectedE: Documento;

	onSelect(documento: Documento) { this.selectedE = documento;  }

	loadData()
	{
		this.documentos = Ventas;
	}

	ngOnInit() {
		this.loadData();
	}
}

var DOCUMENTOS: Documento[] = [
	{ "id": 1, "codigo":"GC001", "monto": 45 },
	{ "id": 2, "codigo":"GC002", "monto": 33 },
	{ "id": 3, "codigo":"GC003", "monto": 228 },
	{ "id": 4, "codigo":"GC004", "monto": 76 }
];

var Ventas: Documento[] = [
	{ "id": 6, "codigo":"GC011", "monto": 45 },
	{ "id": 7, "codigo":"GC002", "monto": 33 },
	{ "id": 8, "codigo":"GC003", "monto": 228 },
	{ "id": 9, "codigo":"GC004", "monto": 76 }
];

declare function obtener(): string;

import {Component, AfterViewChecked, OnInit, Input, Output, EventEmitter}         from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Usr} from './usuario';
@Component({
    selector: 'span-editable',
	template:
    `<div>
		<div *ngIf="show">
			<span (click)="EditarValor()">{{usuario_e.username}}</span>
		</div>
		<div *ngIf!="show" class="input-controls">
			<input type="text" (blur)="onFocusOut(textobox.value)" [(ngModel)]="usuario_e.username" #textobox />
		</div>
	</div>
    `,
	inputs: ['usuario_e']
})
export class SpanEditableComponent implements OnInit, AfterViewChecked {
	
	show: bool = true;
	@Input() usuario_e: Usr;

	@Output() saved = new EventEmitter();

	EditarValor()
	{
		this.show = !this.show;
	}

	onFocusOut(valor: string)
	{
		this.usuario_e.username = valor;
		this.EditarValor();
		this.saved.next(this.usuario_e);
	}
	
	ngOnInit() {
	    
	}
	
	ngAfterViewChecked()
	{
	
	}
}


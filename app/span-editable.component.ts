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
	
	/*
	AHERRERA:
	Var to control the status of the component and determine what part of the code (DOM) should be used
	*/
	show: bool = true;
	
	/*
	AHERRERA:
	Defines an input var of type Usr
	*/
	@Input() usuario_e: Usr;

	/*
	AHERRERA:
	Defines an even called saved
	*/
	@Output() saved = new EventEmitter();

	/*
	AHERRERA:
	Method to switch the dom section of the component
	*/
	EditarValor()
	{
		this.show = !this.show;
	}

	/*
	AHERRERA:
	Method attached to the event blur on DOM to be called when the user leaves the textbox
	*/
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


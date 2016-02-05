import {Component}         from 'angular2/core';
@Component({
    selector: 'span-editable',
    template: 
    `
	<div *ng-if="editable">
		<span (click)="EditarValor()">{{valor}}</span>
	</div>
	<div *ng-if!="editable">
		<input #textobox (blur)="onFocusOut(textobox.value) >{{valor}}</input>
	</div>
    `
  ]
})
export class SpanEditable implements AfterViewChecked {
	public editable: bool = false;
	public valor: string = '';

	EditarValor()
	{
		this.editable = !this.editable;
	}

	onFocusOut(valor: string)
	{
		this.valor = valor;
	}
	
	ngAfterViewChecked()
	{
	
	}
}


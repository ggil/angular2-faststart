import {Component}         from 'angular2/core';
@Component({
    selector: 'span-editable',
    template: 
    `
	<div *ng-if="editable">
		<span (click)="EditarValor()">{{valor}}</span>
	</div>
	<div *ng-if!="editable">
		<input #textobox (blur)="onFocusOut(textobox.value) [(ngModel)]="hero.name" />
	</div>
    `
  ]
})
export class SpanEditable implements OnInit, AfterViewChecked {
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
	
	ngOnInit() {
	    if (!this.hero) {
	      let id = +this._routeParams.get('id');
	      this._heroService.getHero(id).then(hero => this.hero = hero);
	    }
	  }
	
	ngAfterViewChecked()
	{
	
	}
}


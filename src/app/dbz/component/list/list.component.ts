import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  //public onDelete: EventEmitter<number> = new EventEmitter();
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
      name: 'Trunks',
      power: 10
    }
  ]

  /*
  onDeleteCharacter(index: number): void {
    console.log({index});
    this.onDelete.emit(index);
  }
  */

 onDeleteCharacterById(id?: string): void {
  if(!id) return;
  this.onDelete.emit(id);
 }

}

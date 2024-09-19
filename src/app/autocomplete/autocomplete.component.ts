import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
arrayList = ['Red', 'Yello', 'Green' , 'Black']
filteroptions!:Observable<string[]>
formcontrol = new FormControl('')

ngOnInit() : void{
this.filteroptions = this.formcontrol.valueChanges.pipe(
  startWith(''), map(value => this._FILTER(value || ''))
)
}

private _FILTER(value:string) : string[] {
const searchvalue = value.toLocaleLowerCase();
return this.arrayList.filter(option => option.toLocaleLowerCase().includes(searchvalue))
}
}

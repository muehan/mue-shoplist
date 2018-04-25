import { Component, OnInit } from '@angular/core';
import { FreezerService } from '../../services';
import { Observable } from 'rxjs/Observable';
import { FreezerItem } from '../../models';

@Component({
  selector: 'mue-freezer',
  templateUrl: './freezer.component.html',
  styleUrls: ['./freezer.component.scss']
})

export class MueFreezerComponent implements OnInit {

  public items$: Observable<FreezerItem[]>;

  constructor(
    private freezerService: FreezerService
  ) { }

  ngOnInit() {
    this.freezerService.initialize();
    this.items$ = this.freezerService.getAll();
  }

  public delete(item: FreezerItem): void {
    this.freezerService.remove(item);
  }
}

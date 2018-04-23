import { Component, OnInit } from '@angular/core';
import { FreezerService } from '../../services';

@Component({
  selector: 'app-freezer',
  templateUrl: './freezer.component.html',
  styleUrls: ['./freezer.component.scss']
})
export class FreezerComponent implements OnInit {

  constructor(
    private freezerService: FreezerService
  ) { }

  ngOnInit() {
  }

}

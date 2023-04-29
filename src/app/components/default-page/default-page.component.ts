import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ArrayIndexingComponent } from './array-indexing/array-indexing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArrayIndexingComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'before-leetcode';
}

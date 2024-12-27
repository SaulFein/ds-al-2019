import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-indexing',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './array-indexing.component.html',
  styleUrl: './array-indexing.component.scss',
})
export class ArrayIndexingComponent {
  iterateOverArrayResult_ = signal<string>('');
  iterateOverArrayInReverseResult_ = signal<string>('');
  everySecondElementResult_ = signal<string>('');
  findTheTargetIndexResult_ = signal<number | undefined>(-1);
  searchForTarget = null;
  defaultArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  iterateOverArray(arr?: any[]) {
    if (!arr) {
      arr = [...this.defaultArray];
    }
    this.iterateOverArrayResult_.set('');
    arr.forEach((item, index) => {
      setTimeout(() => {
        console.log(item);
        let currentResult = this.iterateOverArrayResult_();
        this.iterateOverArrayResult_.set((currentResult += item + '\n'));
      }, index * 1000);
    });
  }

  iterateOverArrayInReverse(arr?: any[]) {
    if (!arr) {
      arr = [...this.defaultArray];
    }
    while (arr.length) {
      let item = arr.pop();
      console.log(item);
      let currentResult = this.iterateOverArrayInReverseResult_();
      this.iterateOverArrayInReverseResult_.set((currentResult += item + '\n'));
    }
  }

  fetchEverySecondElement(arr?: any[]) {
    if (!arr) {
      arr = [...this.defaultArray];
    }
    for (let i = 1; i <= arr.length - 1; i += 2) {
      setTimeout(() => {
        console.log(arr[i]);
        let currentResult = this.everySecondElementResult_();
        this.everySecondElementResult_.set((currentResult += arr[i] + '\n'));
      }, i * 1000);
    }
  }

  findTheTargetElement(element: any, arr?: any[]) {
    const result = this.defaultArray.findIndex((el) => el == element);
    console.log(result);
    this.findTheTargetIndexResult_.set(result);
  }
}

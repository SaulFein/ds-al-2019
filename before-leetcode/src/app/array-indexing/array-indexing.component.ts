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
  findTheFirstPrimeNumberResult_ = signal<any>('');
  traverseTwoDimensionalArrayResult_ = signal<string>('');
  traverseMainDiagonalOfMatrixResult_ = signal<string>('');
  traversePerimeterOfMatrixResult_ = signal<string>('');
  traverseElementsInSpiralOrderResult_ = signal<string>('');
  traverseLowerTriangleOfMatrixResult_ = signal<string>('');
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

  findTheFirstPrimeNumberInArray(arr?: any[]) {
    const result = [4, 8, 9, 13].find((el) => {
      if (el === 1) {
        return false;
      }
      if (el === 2) {
        return true;
      }
      const boundary = Math.floor(Math.sqrt(el));
      for (let i = 2; i <= boundary; i++) {
        if (el % i === 0) {
          return false;
        }
      }
      console.log(el);
      return true;
    });
    this.findTheFirstPrimeNumberResult_.set(result);
  }

  traverseTwoDimensionalArray(arr?: any[][]) {
    if (!arr) {
      arr = [this.defaultArray, [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]];
    }
    arr?.forEach((item) => {
      item.forEach((el) => {
        let currentResult = this.traverseTwoDimensionalArrayResult_();
        this.traverseTwoDimensionalArrayResult_.set((currentResult += el));
        console.log(el);
      });
    });
  }

  traverseMainDiagonalOfMatrix(arr?: any[][]) {
    if (!arr) {
      arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
    }
    arr.forEach((item, i) => {
      let currentResult = this.traverseMainDiagonalOfMatrixResult_();
      this.traverseMainDiagonalOfMatrixResult_.set(
        (currentResult += arr[i][i])
      );
      console.log(currentResult);
    });
  }

  traversePerimeterOfMatrix(arr?: any[][]) {
    if (!arr) {
      arr = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ];
    }

    let result = [...arr[0]];
    for (let i = 1; i < arr.length - 1; i++) {
      result.push(arr[i][arr[i].length - 1]); //1,2,3,6
    }
    result.push(...arr[arr.length - 1].reverse()); //1,2,3,6,9,8,7,
    for (let i = arr.length - 2; i > 0; i--) {
      result.push(arr[i][0]);
    }
    this.traversePerimeterOfMatrixResult_.set(result.toString());
  }

  traverseElementsInSpiralOrder(arr?: any[][]) {
    if (!arr) {
      arr = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ];
    }
    const result = [];
    // Initialize the boundaries of the matrix
    let top = 0;
    let bottom = arr.length - 1;
    let left = 0;
    let right = arr[0].length - 1;

    // Initialize the direction: 0 - right, 1 - down, 2 - left, 3 - up
    let direction = 0;

    // Loop until the boundaries overlap
    while (top <= bottom && left <= right) {
      if (direction === 0) {
        // Move right
        for (let i = left; i <= right; i++) {
          result.push(arr[top][i]);
        }
        top++; // Move the top boundary down
      } else if (direction === 1) {
        // Move down
        for (let i = top; i <= bottom; i++) {
          result.push(arr[i][right]);
        }
        right--; // Move the right boundary left
      } else if (direction === 2) {
        // Move left
        for (let i = right; i >= left; i--) {
          result.push(arr[bottom][i]);
        }
        bottom--; // Move the bottom boundary up
      } else if (direction === 3) {
        // Move ups
        for (let i = bottom; i >= top; i--) {
          result.push(arr[i][left]);
        }
        left++; // Move the left boundary right
      }
      // Update the direction
      direction = (direction + 1) % 4;
    }
    this.traverseElementsInSpiralOrderResult_.set(result.toString());
  }

  traverseLowerTriangleOfMatrix(arr?: any[][]) {
    if (!arr) {
      arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
    }
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j <= i; j++) {
        result.push(arr[i][j]);
      }
    }
    this.traverseLowerTriangleOfMatrixResult_.set(result.toString());
  }
}

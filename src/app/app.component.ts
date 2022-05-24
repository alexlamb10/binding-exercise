import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedIndex: number = -1;

  flops = [
    "https://drive.google.com/uc?export=view&id=1jg9XbBTf7mwaJKl16Knvr7Exzal6G7q3", "https://drive.google.com/uc?export=view&id=1PBKsp92XH9MUMve3Ls7jdzU2r8H0JstH", "https://drive.google.com/uc?export=view&id=1wk7B5EvZ0qUs4YoNthLsf4i5rSbD0LiJ", "https://drive.google.com/uc?export=view&id=1Or5hNiU9RcJKFucNGWR1r6K0KC4fYNYZ"
  ];

  isSelected(i: number) {
    return this.selectedIndex === i
  }

  voteFor(index: number) {
    if(this.isSelected(index)){
      this.selectedIndex = -1
    }else {
      this.selectedIndex = index
    }
  }

  getButtonText(index : number) {
    if(this.isSelected(index)){
      return "Unvote"
    } else{
      return "Vote"
    }
  }

  anySelected() {
    return this.selectedIndex !== -1
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data: any = {};
  editnumber: any = {};
  selectedAction: string = "none";

  arr: any = [
    {
      id: 1,
      name: "John",
      number: "+380954378153",
      show: false
    },
    {
      id: 2,
      name: "Sarah",
      number: "+380974659674",
      show: false
    },   
    {
      id: 3,
      name: "Nick",
      number: "+380687459673",
      show: false
    },   
    {
      id: 4,
      name: "Emy",
      number: "+380677723416",
      show: false
    },    
    {
      id: 5,
      name: "Diana",
      number: "+380954345191",
      show: false
    },
    {
      id: 6,
      name: "Mark",
      number: "+380917683057",
      show: false
    }
  ];

  createNumber() {
    this.arr.push(
      {
        id: this.arr[this.arr.length - 1].id + 1,
        name: this.data.name,
        number: this.data.number,
        show: false
      }
    )
  }

  deleteNumber(id) {
    this.arr = this.arr.filter(contact => contact.id != id);
  }

  resetCreateForm() {
    this.data = {};
  }

  resetEditForm() {
    this.editnumber = {};
  }

  editNumber() {
    for(let i = 0; i < this.arr.length; i++) {
      if(this.arr[i].id == this.editnumber.id) {
        this.arr[i].name = this.editnumber.name;
        this.arr[i].number = this.editnumber.number;
        this.arr[i].show = false;
      }
    }
  }

  changeNumber(id, name, number) {
    this.editnumber.id = id;
    this.editnumber.name = name;
    this.editnumber.number = number;
  }
}

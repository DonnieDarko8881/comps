import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  items = [
    {title: "Why is the sky blue?", content: "The sky is blue becuase it is"},
    {title: "What does an orange taste like?", content: "An oragne tastes like an orange"},
    {title: "What color is that cat?", content: "The cat is an orange color"},
  ]
  openModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.openModal = !this.openModal;
  }

}

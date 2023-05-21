import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: any = [
    { name: 'HTML', rate: '90%',color:"success" },
    { name: 'CSS', rate: '80%' ,color:"primary"},
    { name: 'JS', rate: '85%' ,color:"warning"},
    { name: 'BOOTSTRAP', rate: '75%' ,color:"info"},
    { name: 'ANGULAR', rate: '60%' ,color:"secondary" },
    {name:"NODEJS",rate:"80%", color:"danger"},
    {name:"MONGODB",rate:"95%",color:"info-emphasis"},
  ];

  
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test5',
    templateUrl: './test5.component.html',
    styleUrls: ['./test5.component.css']
})

export class Test5Component implements OnInit {

    ngOnInit(): void {
        console.log("hello world");
        
    }

    name: string = "sailendra pandey";
}
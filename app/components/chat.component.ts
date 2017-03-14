import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'chat',
    templateUrl: '../../../app/components/chat.html'
})

export class ChatComponent{

    constructor(private router: Router){

    }

}
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent }  from './components/chat.component';


const appRoutes: Routes = [
    {
        path: '',
        component: ChatComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

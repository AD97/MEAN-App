import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { IntroductionComponent } from './introduction/introduction.component';



export const AppRoutes: Routes = [
	{ path: 'introduction', component: IntroductionComponent },
	{ path: 'personal_information', component: PersonalInformationComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
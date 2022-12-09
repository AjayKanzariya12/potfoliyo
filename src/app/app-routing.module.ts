import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SassLandingOneComponent } from './components/pages/sass-landing-one/sass-landing-one.component';
import { AppLandingComponent } from './components/pages/app-landing/app-landing.component';
import { SassLandingTwoComponent } from './components/pages/sass-landing-two/sass-landing-two.component';
import { AgencyLandingOneComponent } from './components/pages/agency-landing-one/agency-landing-one.component';
import { AgencyLandingTwoComponent } from './components/pages/agency-landing-two/agency-landing-two.component';
import { PortfolioLandingComponent } from './components/pages/portfolio-landing/portfolio-landing.component';
import { WebDevelopmentComponent } from './components/pages/web-development/web-development.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { PortfolioShowcaseComponent } from './components/pages/portfolio-landing/portfolio-showcase/portfolio-showcase.component';
import { UIUXComponent } from './components/pages/UI-UX/ui-ux.component';
import { AppDevelopmentComponent } from './components/pages/app-development/app-development.component';
import { GraphicsComponent } from './components/pages/graphics/graphics.component';
import { DigitalMarketingComponent } from './components/pages/digital-marketing/digital-marketing.component';
import { DevelopersComponent } from './components/pages/developers/developers.component';

const routes: Routes = [
    {path: '', component: AppLandingComponent},
    {path: 'sass-landing-two', component: SassLandingTwoComponent},
    {path: 'app-landing', component: AppLandingComponent},
    {path: 'agency-landing-one', component: AgencyLandingOneComponent},
    {path: 'agency-landing-two', component: AgencyLandingTwoComponent},
    {path: 'portfolio-landing', component: PortfolioLandingComponent},
    {path:'Web-Development' ,component:WebDevelopmentComponent},
    {path:'viewDetails/:id',component:DetailsComponent},
    {path:'UI-UX' ,component:UIUXComponent},
    {path:'App-Development',component:AppDevelopmentComponent},
    {path:'graphics' ,component:GraphicsComponent},
    {path:'Digital-marketing' ,component:DigitalMarketingComponent},
    {path:'Dedicated-Developers' ,component:DevelopersComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
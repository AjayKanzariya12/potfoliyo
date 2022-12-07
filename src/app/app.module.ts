import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StickyNavModule } from 'ng2-sticky-nav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TabsModule } from 'ngx-tabset';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SassLandingOneComponent } from './components/pages/sass-landing-one/sass-landing-one.component';
import { AppLandingComponent } from './components/pages/app-landing/app-landing.component';
import { SassLandingTwoComponent } from './components/pages/sass-landing-two/sass-landing-two.component';
import { AgencyLandingOneComponent } from './components/pages/agency-landing-one/agency-landing-one.component';
import { AgencyLandingTwoComponent } from './components/pages/agency-landing-two/agency-landing-two.component';
import { PortfolioLandingComponent } from './components/pages/portfolio-landing/portfolio-landing.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { SassOneBannerComponent } from './components/pages/sass-landing-one/sass-one-banner/sass-one-banner.component';
import { SassOneTrustedCompanyComponent } from './components/pages/sass-landing-one/sass-one-trusted-company/sass-one-trusted-company.component';
import { SassOneServicesComponent } from './components/pages/sass-landing-one/sass-one-services/sass-one-services.component';
import { SassOneWhyChooseComponent } from './components/pages/sass-landing-one/sass-one-why-choose/sass-one-why-choose.component';
import { SassOneStandardComponent } from './components/pages/sass-landing-one/sass-one-standard/sass-one-standard.component';
import { SassOneAppsComponent } from './components/pages/sass-landing-one/sass-one-apps/sass-one-apps.component';
import { SassOneCounterComponent } from './components/pages/sass-landing-one/sass-one-counter/sass-one-counter.component';
import { SassOnePricingComponent } from './components/pages/sass-landing-one/sass-one-pricing/sass-one-pricing.component';
import { SassOneTestimonialComponent } from './components/pages/sass-landing-one/sass-one-testimonial/sass-one-testimonial.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NewsletterComponent } from './components/common/newsletter/newsletter.component';
import { SassTwoBannerComponent } from './components/pages/sass-landing-two/sass-two-banner/sass-two-banner.component';
import { SassTwoServicesComponent } from './components/pages/sass-landing-two/sass-two-services/sass-two-services.component';
import { SassTwoAppsComponent } from './components/pages/sass-landing-two/sass-two-apps/sass-two-apps.component';
import { SassTwoFeaturesComponent } from './components/pages/sass-landing-two/sass-two-features/sass-two-features.component';
import { SassTwoPricingComponent } from './components/pages/sass-landing-two/sass-two-pricing/sass-two-pricing.component';
import { SassTwoFunfactsComponent } from './components/pages/sass-landing-two/sass-two-funfacts/sass-two-funfacts.component';
import { SassTwoTestimonialComponent } from './components/pages/sass-landing-two/sass-two-testimonial/sass-two-testimonial.component';
import { AppBannerComponent } from './components/pages/app-landing/app-banner/app-banner.component';
import { AppWhyChooseComponent } from './components/pages/app-landing/app-why-choose/app-why-choose.component';
import { AppFeaturesComponent } from './components/pages/app-landing/app-features/app-features.component';
import { AppScreenshotsComponent } from './components/pages/app-landing/app-screenshots/app-screenshots.component';
import { AppHowToUseComponent } from './components/pages/app-landing/app-how-to-use/app-how-to-use.component';
import { AppPricingComponent } from './components/pages/app-landing/app-pricing/app-pricing.component';
import { AppTestimonialsComponent } from './components/pages/app-landing/app-testimonials/app-testimonials.component';
import { PortfolioBannerComponent } from './components/pages/portfolio-landing/portfolio-banner/portfolio-banner.component';
import { PortfolioAboutComponent } from './components/pages/portfolio-landing/portfolio-about/portfolio-about.component';
import { PortfolioServicesComponent } from './components/pages/portfolio-landing/portfolio-services/portfolio-services.component';
import { PortfolioSoftwareComponent } from './components/pages/portfolio-landing/portfolio-software/portfolio-software.component';
import { PortfolioShowcaseComponent } from './components/pages/portfolio-landing/portfolio-showcase/portfolio-showcase.component';
import { PortfolioPartnerComponent } from './components/pages/portfolio-landing/portfolio-partner/portfolio-partner.component';
import { PortfolioContactComponent } from './components/pages/portfolio-landing/portfolio-contact/portfolio-contact.component';
import { PortfolioTestimonialsComponent } from './components/pages/portfolio-landing/portfolio-testimonials/portfolio-testimonials.component';
import { AgencyOneTestimonialsComponent } from './components/pages/agency-landing-one/agency-one-testimonials/agency-one-testimonials.component';
import { AgencyOneBannerComponent } from './components/pages/agency-landing-one/agency-one-banner/agency-one-banner.component';
import { AgencyOneAboutComponent } from './components/pages/agency-landing-one/agency-one-about/agency-one-about.component';
import { AgencyOneServicesComponent } from './components/pages/agency-landing-one/agency-one-services/agency-one-services.component';
import { AgencyOneWorkProcessComponent } from './components/pages/agency-landing-one/agency-one-work-process/agency-one-work-process.component';
import { AgencyOneCaseStudyComponent } from './components/pages/agency-landing-one/agency-one-case-study/agency-one-case-study.component';
import { AgencyOnePricingComponent } from './components/pages/agency-landing-one/agency-one-pricing/agency-one-pricing.component';
import { AgencyOneTeamComponent } from './components/pages/agency-landing-one/agency-one-team/agency-one-team.component';
import { AgencyTwoBannerComponent } from './components/pages/agency-landing-two/agency-two-banner/agency-two-banner.component';
import { AgencyTwoAboutComponent } from './components/pages/agency-landing-two/agency-two-about/agency-two-about.component';
import { AgencyTwoServicesComponent } from './components/pages/agency-landing-two/agency-two-services/agency-two-services.component';
import { AgencyTwoWorkProcessComponent } from './components/pages/agency-landing-two/agency-two-work-process/agency-two-work-process.component';
import { AgencyTwoCaseStudyComponent } from './components/pages/agency-landing-two/agency-two-case-study/agency-two-case-study.component';
import { AgencyTwoTestimonialsComponent } from './components/pages/agency-landing-two/agency-two-testimonials/agency-two-testimonials.component';
import { AgencyTwoPricingComponent } from './components/pages/agency-landing-two/agency-two-pricing/agency-two-pricing.component';
import { AgencyTwoTeamComponent } from './components/pages/agency-landing-two/agency-two-team/agency-two-team.component';
import { WebDevelopmentComponent } from './components/pages/web-development/web-development.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/pages/details/details.component';
import { UIUXComponent } from './components/pages/UI-UX/ui-ux.component';
import { AppDevelopmentComponent } from './components/pages/app-development/app-development.component';
import { GraphicsComponent } from './components/pages/graphics/graphics.component';
import { DigitalMarketingComponent } from './components/pages/digital-marketing/digital-marketing.component';
import { DevelopersComponent } from './components/pages/developers/developers.component';

@NgModule({
    declarations: [
        AppComponent,
        SassLandingOneComponent,
        AppLandingComponent,
        SassLandingTwoComponent,
        AgencyLandingOneComponent,
        AgencyLandingTwoComponent,
        PortfolioLandingComponent,
        NavbarComponent,
        SassOneBannerComponent,
        SassOneTrustedCompanyComponent,
        SassOneServicesComponent,
        SassOneWhyChooseComponent,
        SassOneStandardComponent,
        SassOneAppsComponent,
        SassOneCounterComponent,
        SassOnePricingComponent,
        SassOneTestimonialComponent,
        FooterComponent,
        NewsletterComponent,
        SassTwoBannerComponent,
        SassTwoServicesComponent,
        SassTwoAppsComponent,
        SassTwoFeaturesComponent,
        SassTwoPricingComponent,
        SassTwoFunfactsComponent,
        SassTwoTestimonialComponent,
        AppBannerComponent,
        AppWhyChooseComponent,
        AppFeaturesComponent,
        AppScreenshotsComponent,
        AppHowToUseComponent,
        AppPricingComponent,
        AppTestimonialsComponent,
        PortfolioBannerComponent,
        PortfolioAboutComponent,
        PortfolioServicesComponent,
        PortfolioSoftwareComponent,
        PortfolioShowcaseComponent,
        PortfolioPartnerComponent,
        PortfolioContactComponent,
        PortfolioTestimonialsComponent,
        AgencyOneTestimonialsComponent,
        AgencyOneBannerComponent,
        AgencyOneAboutComponent,
        AgencyOneServicesComponent,
        AgencyOneWorkProcessComponent,
        AgencyOneCaseStudyComponent,
        AgencyOnePricingComponent,
        AgencyOneTeamComponent,
        AgencyTwoBannerComponent,
        AgencyTwoAboutComponent,
        AgencyTwoServicesComponent,
        AgencyTwoWorkProcessComponent,
        AgencyTwoCaseStudyComponent,
        AgencyTwoTestimonialsComponent,
        AgencyTwoPricingComponent,
        AgencyTwoTeamComponent,
        WebDevelopmentComponent,
        DetailsComponent,
        UIUXComponent,
        AppDevelopmentComponent,
        GraphicsComponent,
        DigitalMarketingComponent,
        DevelopersComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StickyNavModule,
        BrowserAnimationsModule,
        CarouselModule,
        NgxSmartModalModule.forRoot(),
        TabsModule,
        NgxScrollTopModule,
        MatSelectModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import {
  IconMenu,
  IconUser,
  IconXSquare,
  IconDollarSign,
  IconMap,
  IconGithub,
  IconLinkedin,
  IconSmartphone,
  IconMail,
  IconPlus,
  IconCalendar,
  IconArrowLeft
} from 'angular-feather';

const icons = [
  IconMenu,
  IconUser,
  IconXSquare,
  IconDollarSign,
  IconMap,
  IconGithub,
  IconLinkedin,
  IconSmartphone,
  IconMail,
  IconPlus,
  IconArrowLeft,
  IconCalendar
];

@NgModule({
  exports: icons
})
export class IconsModule { }

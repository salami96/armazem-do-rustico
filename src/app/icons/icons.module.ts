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
  IconArrowLeft,
  IconImage
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
  IconCalendar,
  IconImage
];

@NgModule({
  exports: icons
})
export class IconsModule { }

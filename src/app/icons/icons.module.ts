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
  IconImage,
  IconSave,
  IconUserX
} from 'angular-feather';

const icons = [
  IconMenu,
  IconUser,
  IconUserX,
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
  IconImage,
  IconSave
];

@NgModule({
  exports: icons
})
export class IconsModule { }

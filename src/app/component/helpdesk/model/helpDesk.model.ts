import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';
export interface HelpDeskModel {
  Id: number;
  Label: string;
  IdParent: number;
  Level: number;
  Ico: IconName;
}

export interface HelpDeskSearchModel {
  pId: number;
  pLabel: string;
  pIdParent: number;
  pLevel: number;
}

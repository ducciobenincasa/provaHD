export interface HelpDeskModel {
  Id: number;
  Label: string;
  IdParent: number;
  Level: number;
  Ico: string;
}

export interface HelpDeskSearchModel {
  pId: number;
  pLabel: string;
  pIdParent: number;
  pLevel: number;
}

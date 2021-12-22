export interface IWidgetContent {
  id: number;
}

export interface IReloadable {
  loading: boolean;
  reload(): void;
}

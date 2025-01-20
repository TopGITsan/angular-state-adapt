export type SidenavMode = 'over' | 'side';
export interface GlobalState {
  isSidenavOpend: boolean;
  error: {} | null;
  sidenavMode: SidenavMode;
}
export const initialGlobalState: GlobalState = {
  isSidenavOpend: true,
  error: null,
  sidenavMode: 'side',
};

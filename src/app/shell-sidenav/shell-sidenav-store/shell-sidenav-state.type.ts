export type SidenavMode = 'over' | 'side';
export interface ShellSidenavState {
  isSidenavOpend: boolean;
  error: object | null;
  sidenavMode: SidenavMode;
}
export const initialShellSidenavState: ShellSidenavState = {
  isSidenavOpend: true,
  error: null,
  sidenavMode: 'side',
};

export type SidenavMode = 'over' | 'side';
export interface GlobalState {
  error: object | null;
}
export const initialGlobalState: GlobalState = {
  error: null,
};

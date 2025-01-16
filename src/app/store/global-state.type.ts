export interface GlobalState {
  isSidenavOpend: boolean;
  error: {} | null;
}
export const initialGlobalState: GlobalState = {
  isSidenavOpend: true,
  error: null,
};

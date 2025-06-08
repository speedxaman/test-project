export interface ApplicationGroup {
  id: number;
  name: string;
  idleTimeConfiguration: string;
  isProductive: boolean;
}

export interface User {
  name: string;
  email: string;
}

export interface SidebarItem {
  id: string;
  icon: string;
  label: string;
  active: boolean;
}

export interface TabItem {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}

export interface IdleConfigModal {
  isOpen: boolean;
  applicationGroup: ApplicationGroup | null;
  selectedConfig: string;
}

export interface CustomGroup {
  id: number;
  name: string;
}

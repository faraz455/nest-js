export const ResourceName = {
  // PHR
  ResourceName: 'ResourceName',
} as const;

export type ResourceName = keyof typeof ResourceName;

export type ResoucePermissionType = {
  [resource in ResourceName]?: { create?: boolean; view?: boolean };
};

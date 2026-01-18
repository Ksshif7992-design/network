
/**
 * MULTI-TENANT SECURITY LAYER
 * This middleware extracts the Tenant ID from the request (Domain or Header)
 * and attaches it to the database query context.
 */

export interface TenantContext {
  tenantId: string;
  adminId: string;
  role: 'SUPER_ADMIN' | 'MASTER_ADMIN' | 'EMPLOYEE';
}

export const getTenantContext = (req: any): TenantContext => {
  // In production, this would look at the hostname (e.g., track.globalsolvers.io)
  // and find the matching Tenant ID in the database.
  const host = req.headers.host;
  const tenantId = host.split('.')[0]; 

  return {
    tenantId: tenantId,
    adminId: req.user?.id || 'anonymous',
    role: req.user?.role || 'EMPLOYEE'
  };
};

/**
 * SPEED OPTIMIZATION: 
 * Every query using this context uses the Composite Index (tenant_id, id).
 * This ensures the database never scans other tenants' data.
 */
export const scopeQuery = (tenantId: string) => {
  return {
    where: {
      tenant_id: tenantId
    }
  };
};

/**
 * debugAssert will only run in non-production environments.
 * In production builds (NODE_ENV === 'production'), this function is tree-shaken away.
 * When assertion fails, the process is forcibly terminated.
 *
 * Example:
 *   debugAssert(userId != null, "userId is required");
 */
export declare function debugAssert(condition: boolean, message?: string): void;

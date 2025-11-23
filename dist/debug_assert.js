/**
 * debugAssert will only run in non-production environments.
 * In production builds (NODE_ENV === 'production'), this function is tree-shaken away.
 * When assertion fails, the process is forcibly terminated.
 *
 * Example:
 *   debugAssert(userId != null, "userId is required");
 */
export function debugAssert(condition, message) {
    if (process.env.NODE_ENV !== 'production') {
        if (!condition) {
            // Print error message to stderr
            if (typeof process.stderr !== 'undefined') {
                process.stderr.write(`[Debug Assert Violation] ${message !== null && message !== void 0 ? message : 'Assertion failed'}\n`);
            }
            // Forcefully exit process
            process.exit(1);
        }
    }
}
//# sourceMappingURL=debug_assert.js.map
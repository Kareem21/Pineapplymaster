import { useLayoutEffect } from 'react';

// Simple hook to lock body scroll when a condition (e.g., modal open) is true
function useBodyScrollLock(isLocked) {
    useLayoutEffect(() => {
        if (isLocked) {
            const originalStyle = window.getComputedStyle(document.body).overflow;
            document.body.style.overflow = 'hidden';
            // Return cleanup function to restore original style
            return () => {
                document.body.style.overflow = originalStyle;
            };
        }
        // If not locked, ensure overflow is default (unset or auto)
        document.body.style.overflow = 'unset';
        // No cleanup needed if wasn't locked
        return undefined;

    }, [isLocked]); // Only re-run the effect if isLocked changes
}

export default useBodyScrollLock;
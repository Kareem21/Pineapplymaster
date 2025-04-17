import { useState, useCallback } from 'react';

// Manages the state for the Job Detail Panel
function useJobDetailPanelState() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const openJobDetail = useCallback((job) => {
        if (job) {
            setSelectedJob(job);
            setIsDetailOpen(true);
        } else {
            console.warn("Attempted to open detail panel with null job.");
            setSelectedJob(null);
            setIsDetailOpen(false);
        }
    }, []); // Empty dependency array means this function reference is stable

    const closeJobDetail = useCallback(() => {
        setIsDetailOpen(false);
        // Optional: Delay clearing job for closing animation
        // setTimeout(() => setSelectedJob(null), 300);
    }, []); // Empty dependency array

    return {
        selectedJob,
        isDetailOpen,
        openJobDetail,
        closeJobDetail,
    };
}

export default useJobDetailPanelState;
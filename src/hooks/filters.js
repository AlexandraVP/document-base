import {useState} from "react";

export function useFilters() {
    const [filters, setFilters] = useState({
        sortColumn: 'createdAt',
        sortOrder: 'desc'
    });
    const applyFilters = ({id, dateRange, title, sortColumn, sortOrder}) => {
        setFilters({
            id: +id || null,
            dateRange: dateRange && dateRange[0] ? dateRange : null,
            title,
            sortColumn,
            sortOrder
        });
    };
    return [filters, applyFilters];
}
import axios from '../_mocks_/axios';
import { useState, useEffect } from 'react';

export function useDocuments(filters) {
     const [documents, setDocuments] = useState([]);
     const [processing, setProcessing] = useState(false);
     useEffect(() => {
         setProcessing(true);
         axios.get('/api/documents', {params: filters})
             .then(docs => {
                 setDocuments(docs);
                 setProcessing(false);
             });
     }, [filters]);
     return [documents, processing];
}
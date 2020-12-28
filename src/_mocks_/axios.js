const documentList = [
    {
        id: 1,
        title: 'document 1',
        createdAt: '2020-12-28',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
        title: 'document 2',
        createdAt: '2020-12-25',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 3,
        title: 'document 3',
        createdAt: '2020-12-30',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
];

function getDocuments(filters){
    if (filters.id) {
        return documentList.filter(d => d.id === filters.id);
    }
    let filteredDocuments = documentList;
    if (filters.dateRange) {
        filteredDocuments = filteredDocuments
            .filter(d => d.createdAt >= filters.dateRange[0] && d.createdAt <= filters.dateRange[1]);
    }
    if (filters.title) {
        filteredDocuments = filteredDocuments
            .filter(d => d.title.includes(filters.title));
    }
    filteredDocuments.sort((a,b) => {
        const valueA = a[filters.sortColumn];
        const valueB = b[filters.sortColumn];
        const isAscending = filters.sortOrder === 'asc';
        if(valueA === valueB) {
            return 0;
        }
        if( (valueA > valueB) === isAscending) {
            return 1;
        }else{
            return -1;
        }
    });
    return filteredDocuments;
}


const axios = {
    get(_, {params}){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try{
                    resolve(getDocuments(params))
                }catch (error) {
                    reject(error);
                }
            },1000);
        });
    }
};

export default axios;
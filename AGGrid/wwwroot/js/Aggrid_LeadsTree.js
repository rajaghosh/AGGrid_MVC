var rowData = [
    {
        "AggridModelsHolder": null,
        "Name": "jimfallon",
        "Email": "jim@gmail.com",
        "PhoneNumber": "2312199327",
        "StreetAddress": "test street",
        "Message": "this is test"
    },
    {
        "AggridModelsHolder": [
            {
                "Name": "michalsteven",
                "Email": "greg@gmail.com",
                "PhoneNumber": "2212199327",
                "StreetAddress": "test street",
                "Message": "this is test",
                "LeadsCallId": "11"
            },
            {
                "Name": "michalsteven",
                "Email": "greg@gmail.com",
                "PhoneNumber": "2212199327",
                "StreetAddress": "test street",
                "Message": "this is test",
                "LeadsCallId": "12"
            },
            {
                "Name": "michalsteven",
                "Email": "greg@gmail.com",
                "PhoneNumber": "2212199327",
                "StreetAddress": "test street",
                "Message": "this is test",
                "LeadsCallId": "13"
            }
        ],
        "Name": "michalsteven",
        "Email": "greg@gmail.com",
        "PhoneNumber": "2212199327",
        "StreetAddress": "test street",
        "Message": "this is test"
    },
    {
        "AggridModelsHolder": [
            {
                "Name": "rickypointing",
                "Email": "ricky@gmail.com",
                "PhoneNumber": "2915099327",
                "StreetAddress": "test street",
                "Message": "this is test",
                "LeadsCallId": "23"
            },
            {
                "Name": "rickypointing",
                "Email": "ricky@gmail.com",
                "PhoneNumber": "2915099327",
                "StreetAddress": "test street",
                "Message": "this is test",
                "LeadsCallId": "24"
            }
        ],
        "Name": "rickypointing",
        "Email": "ricky@gmail.com",
        "PhoneNumber": "2915099327",
        "StreetAddress": "test street",
        "Message": "this is test"
    },
    {
        "AggridModelsHolder": [
            {
                "Name": "johndoe",
                "Email": "doe@gmail.com",
                "PhoneNumber": "2815099327",
                "StreetAddress": "test street",
                "Message": "this is test",
                "LeadsCallId": "34"
            },
            {
                "Name": "johndoe",
                "Email": "doe@gmail.com",
                "PhoneNumber": "2815099327",
                "StreetAddress": "test street",
                "Message": "this is test",
                "LeadsCallId": "35"
            },
            {
                "Name": "johndoe",
                "Email": "doe@gmail.com",
                "PhoneNumber": "2815099327",
                "StreetAddress": "test street",
                "Message": "this is test",
                "LeadsCallId": "36"
            }
        ],
        "Name": "johndoe",
        "Email": "doe@gmail.com",
        "PhoneNumber": "2815099327",
        "StreetAddress": "test street",
        "Message": "this is test"
    }
];

var gridOptions = {
    //columnDefs: [
    //    // we're using the auto group column by default!
    //    { field: 'jobTitle' },
    //    { field: 'employmentType' },
    //],

    columnDefs: [
        // group cell renderer needed for expand / collapse icons
        //{ field: 'Name', cellRenderer: 'agGroupCellRenderer' },	// cellRenderer: 'agGroupCellRenderer' - This will provide option to expand the sub-grid
        { field: 'Name' },
        { field: 'Email' },
        { field: 'PhoneNumber' },
        { field: 'StreetAddress' },
        { field: 'Message' },
    ],

    defaultColDef: {
        flex: 1,
    },
    autoGroupColumnDef: {
        headerName: 'Leads',
        minWidth: 300,
        cellRendererParams: {
            suppressCount: true,
        },
    },
    //rowData: rowData,
    treeData: true, // enable Tree Data mode
    animateRows: true,

    pagination: true,

    // 10 rows per page (default is 100)
    paginationPageSize: 2,

    groupDefaultExpanded: -1, // expand all groups by default
    getDataPath: function (data) {
        return data.AggridModelsHolder;
    },
};

function onFilterTextBoxChanged() {
    gridOptions.api.setQuickFilter(
        document.getElementById('filter-text-box').value
    );
}

// wait for the document to be loaded, otherwise
// AG Grid will not find the div in the document.
document.addEventListener('DOMContentLoaded', function () {
    // lookup the container we want the Grid to use
    var eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);

    gridOptions.api.setRowData(rowData);
});

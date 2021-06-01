var allRowData;

var allRowData = [
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

    //Specifying all the columns with headers
    columnDefs: [
        // group cell renderer needed for expand / collapse icons
        { field: 'Name', cellRenderer: 'agGroupCellRenderer' },	// cellRenderer: 'agGroupCellRenderer' - This will provide option to expand the sub-grid
        { field: 'Email' },
        { field: 'PhoneNumber' },
        { field: 'StreetAddress' },
        { field: 'Message' },
    ],
    defaultColDef: {
        flex: 1,		//Set flex-Value for column width
    },

    pagination: true,

    // 10 rows per page (default is 100)
    paginationPageSize: 2,
    masterDetail: true, //This tells the grid to allow expanding rows to display Detail Grids.
    //treeData: true, 

    enableCellChangeFlash: true,	//This will be used to show the refresh by flashing

    detailCellRendererParams: {	//This portion will determine how internal portion will be rendered

        refreshStrategy: 'everything',	//Refresh everything on the sub-grid


        //This represents the HTML + styling of the portion which is shown on clicked
        template: function (params) {
            return (
                '<div class="ag-details-row ag-details-row-fixed-height">' +
                '<div style="padding: 4px; font-weight: bold;">' +
                params.data.Name +
                ' ' +
                '</div>' +
                '<div ref="eDetailGrid" class="ag-details-grid ag-details-grid-fixed-height"/>' +
                '</div>'
            );
        },


        //This represents the sub-grid which appear on clicking the main row
        detailGridOptions: {
            rowSelection: 'multiple',
            enableCellChangeFlash: true,
            immutableData: true, //the data rows are updated rather than replaced
            getRowNodeId: function (data) {
                return data.LeadsCallId;
            },
            columnDefs: [               //Sub-Grid Columns
                { field: 'Name', checkboxSelection: true },
                { field: 'LeadsCallId' },
                { field: 'Email' },
                //{ field: 'PhoneNumber', minWidth: 150 },
                { field: 'PhoneNumber' },
                { field: 'StreetAddress' },
                { field: 'Message' },
            ],
            defaultColDef: {
                flex: 1,
                sortable: true,
            },
        },

        

        //This will fetch data for the sub-grid
        getDetailRowData: function (params) {
            //if (params.data.AggridModelsHolder.length > 1) {
            params.successCallback(params.data.AggridModelsHolder);
            //}
        },
    },

    //Activate this portion for auto-refresh
    onFirstDataRendered: onFirstDataRendered,
};


function onFirstDataRendered(params) {
    setInterval(function () {
        //If no data then return
        if (!allRowData) {
            return;
        }

        //Existing code has been modified to refresh all the block
        allRowData.forEach(function (item) {
            //If we want a specific row to be refreshed then we can remove the foreach portion and use this below code tp get the data	
            //var data = allRowData[0];
            var data = item;

            var newAggridModelsHolder = [];
            data.AggridModelsHolder.forEach(function (record, index) {
                newAggridModelsHolder.push({
                    Name: record.Name,
                    LeadsCallId: record.LeadsCallId,
                    Email: record.Email,
                    PhoneNumber: record.PhoneNumber,
                    StreetAddress: record.StreetAddress,
                    Message: record.Message,
                });
            });

            data.AggridModelsHolder = newAggridModelsHolder;

            var tran = {
                update: [data],
            };

            params.api.applyTransaction(tran);
        })

    }, 60000); //Specify the interval in which the call will be made -> 5000 = 5secs
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');

    //gridDiv - Our target div to be loaded with the data
    //gridOptions - How to load data in the grid having several other options
    new agGrid.Grid(gridDiv, gridOptions);

    //$.ajax({
    //    type: "POST",
    //    url: "http://localhost:63073/js/LeadsSampleData.json",
    //    dataType: "json",
    //    data: { reloadAPI: true },
    //    success: function (data) {
    //        allRowData = data;
    //        gridOptions.api.setRowData(data);
    //    },
    //    error: function (error) {
    //    }
    //});

    //gGrid.simpleHttpRequest({
    //    url: 'http://localhost:63073/js/LeadsSampleData.json',
    //})
    //    .then(function (data) {
    //        allRowData = data;

    //        //if (data.AggridModelsHolder.length > 0) {
    //        //    gridOptions.masterDetail: false;
    //        //}
    //        gridOptions.api.setRowData(data);
    //    });

    gridOptions.api.setRowData(allRowData);


});


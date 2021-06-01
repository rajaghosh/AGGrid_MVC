var gridOptions = {

    //Specifying all the columns with headers
    columnDefs: [
        // group cell renderer needed for expand / collapse icons
        { field: 'name', cellRenderer: 'agGroupCellRenderer' },	// cellRenderer: 'agGroupCellRenderer' - This will provide option to expand the sub-grid
        { field: 'account' },
        { field: 'calls' },
        { field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'" },
    ],
    defaultColDef: {
        flex: 1,		//Set flex-Value for column width
    },
    masterDetail: true, //This option enables to have a drilldown sub-grid
    enableCellChangeFlash: true,	//This will be used to show the refresh by flashing

    detailCellRendererParams: {	//This portion will determine how internal portion will be rendered
        refreshStrategy: 'everything',	//Refresh everything on the sub-grid


        //This represents the HTML + styling of the portion which is shown on clicked
        template: function (params) {
            return (
                '<div class="ag-details-row ag-details-row-fixed-height">' +
                '<div style="padding: 4px; font-weight: bold;">' +
                params.data.name +
                ' ' +
                params.data.calls +
                ' calls</div>' +
                '<div ref="eDetailGrid" class="ag-details-grid ag-details-grid-fixed-height"/>' +
                '</div>'
            );
        },


        //This represents the sub-grid which appear on clicking the main row
        detailGridOptions: {
            rowSelection: 'multiple',
            enableCellChangeFlash: true,
            immutableData: true,
            getRowNodeId: function (data) {
                return data.callId;
            },
            columnDefs: [
                { field: 'name', checkboxSelection: true },
                { field: 'callId' },
                { field: 'direction' },
                { field: 'number', minWidth: 150 },
                { field: 'duration', valueFormatter: "x.toLocaleString() + 's'" },
                { field: 'switchCode', minWidth: 150 },
            ],
            defaultColDef: {
                flex: 1,
                sortable: true,
            },
        },

        //This will fetch data for the sub-grid
        getDetailRowData: function (params) {
            // params.successCallback([]);
            params.successCallback(params.data.callRecords);
        },
    },
    onFirstDataRendered: onFirstDataRendered,
};

var allRowData;

function onFirstDataRendered(params) {

    // arbitrarily expand a row for presentational purposes
	/* By Default 1st row will be expanded
	setTimeout(function () {
		params.api.getDisplayedRowAtIndex(0).setExpanded(true);
	}, 0);
	*/

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

            var newCallRecords = [];
            data.callRecords.forEach(function (record, index) {
                newCallRecords.push({
                    name: record.name,
                    callId: record.callId,
                    duration: record.duration + (index % 2), //To refresh only even rows
                    switchCode: record.switchCode,
                    direction: record.direction,
                    number: record.number,
                });
            });

            data.callRecords = newCallRecords;
            data.calls++;

            var tran = {
                update: [data],
            };

            params.api.applyTransaction(tran);


        })

    }, 10000); //Specify the interval in which the call will be made -> 5000 = 5secs
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');

    //gridDiv - Our target div to be loaded with the data
    //gridOptions - How to load data in the grid having several other options
    new agGrid.Grid(gridDiv, gridOptions);

    //agGrid object from the AGGrid library, Once data is fetched from JSON all the data will be used


    agGrid.simpleHttpRequest({
        url: 'https://www.ag-grid.com/example-assets/master-detail-data.json',
    })
        .then(function (data) {
            allRowData = data;
            gridOptions.api.setRowData(data);
        });

});

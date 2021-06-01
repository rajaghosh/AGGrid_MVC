var rowData = [
    {
        NameList: [
            "jimfallon"
        ],
        Name: null,
        Email: "jim@gmail.com",
        PhoneNumber: "2312199327",
        StreetAddress: "test street",
        Message: "this is test",
        HyperLink: "<a href=\"https://www.w3schools.com\">Visit W3Schools.com!</a>",
        AudioClip: "../../audioSample/horse.ogv",
    },
    {
        NameList: [
            "michalsteven"
        ],
        Name: null,
        Email: "greg@gmail.com",
        PhoneNumber: "2212199327",
        StreetAddress: "test street",
        Message: "this is test",
        HyperLink: null,
        AudioClip: null,
    },
    {
        NameList: [
            "michalsteven",
            "michalsteven "
        ],
        Name: null,
        Email: "greg@gmail.com",
        PhoneNumber: "2212199327",
        StreetAddress: "test street",
        Message: "this is test",
        HyperLink: null,
        AudioClip: null,
    },
    {
        NameList: [
            "michalsteven",
            "michalsteven  "
        ],
        Name: null,
        Email: "greg@gmail.com",
        PhoneNumber: "2212199327",
        StreetAddress: "test street",
        Message: "this is test",
        HyperLink: null,
        AudioClip: null,
    },
    {
        NameList: [
            "michalsteven",
            "michalsteven   "
        ],
        Name: null,
        Email: "greg@gmail.com",
        PhoneNumber: "2212199327",
        StreetAddress: "test street",
        Message: "this is test",
        HyperLink: null,
        AudioClip: null,
    },
    {
        NameList: [
            "rickypointing"
        ],
        Name: null,
        Email: "ricky@gmail.com",
        PhoneNumber: "2915099327",
        StreetAddress: "test street",
        Message: "this is test",
        HyperLink: null,
        AudioClip: null,
    },
    {
        NameList: [
            "rickypointing",
            "rickypointing1"
        ],
        Name: null,
        Email: "ricky@gmail.com",
        PhoneNumber: "2915099327",
        StreetAddress: "test street",
        Message: "this is test",
        HyperLink: null,
        AudioClip: null,
    },
    {
        NameList: [
            "rickypointing",
            "rickypointing2"
        ],
        Name: null,
        Email: "ricky@gmail.com",
        PhoneNumber: "2915099327",
        StreetAddress: "test street",
        Message: "this is test",
        HyperLink: null,
        AudioClip: null,
    },
    {
        NameList: [
            "johndoe"
        ],
        Name: null,
        Email: "doe@gmail.com",
        PhoneNumber: "2815099327",
        StreetAddress: "test street",
        Message: "this is test",
        HyperLink: null,
        AudioClip: null,
    },
    {
        NameList: [
            "johndoe",
            "johndoe1"
        ],
        Name: null,
        Email: "doe@gmail.com",
        PhoneNumber: "2815099327",
        StreetAddress: "test street",
        Message: "this is test",
        HyperLink: null,
        AudioClip: null,
    },
    {
        NameList: [
            "johndoe",
            "johndoe2"
        ],
        Name: null,
        Email: "doe@gmail.com",
        PhoneNumber: "2815099327",
        StreetAddress: "test street",
        Message: "this is test",
        HyperLink: null,
        AudioClip: null,
    },
    {
        NameList: [
            "johndoe",
            "johndoe3"
        ],
        Name: null,
        Email: "doe@gmail.com",
        PhoneNumber: "2815099327",
        StreetAddress: "test street",
        Message: "this is test",
        HyperLink: null,
        AudioClip: null,
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
        //{ field: 'Name' },
        {
            headerName: "Email Address",
            field: 'Email'
        },
        {
            field: 'PhoneNumber',
            //cellStyle: { "align-items": 'center' },
        },
        { field: 'StreetAddress' },
        { field: 'Message' },
        {
            headerName: "Click Me",
            field: 'HyperLink',
            cellRenderer: function (params) {
                return '<a href="https://www.google.com" target="_blank">' + params.value + '</a>'
            }
        },
        {
            headerName: 'Global',
            field: 'HyperLink',
            cellRenderer: (data) => {
                // here, "data" refers to the "IsGlobal" value of the row being displayed
                if (data.value === null) {
                    return 'Null Value Passed';
                } else {
                    return data.value;
                }
            },
        },
        {
            headerName: 'Actions',
            //width: 125,
            field: 'HyperLink',
            cellRenderer: (data) => {
                // here, I was hoping the "data" would refer to the entire
                // row / object being bound, so that I could check for 
                // certain conditions to be true (or false)
                if (data.value === null)
                {
                    return 'Null Value';
                    //return '<span class="far fa-trash-alt mr-2" title="Delete"></span>';
                }
                else
                {
                    //return '<span class="far fa-trash-alt mr-2" title="Delete entry"></span>' +
                    //    '<span class="fab fa-nintendo-switch" title="Promote entry"></span>';

                    return '<button type="button" style="margin-right: 0px;" data-toggle="modal" data-target="#myModal">REQUEST REVIEW</button >';
                }
            }
        },
        {
            headerName: 'Audio',
            width: 350,
            field: 'AudioClip',
            cellRenderer: (data) => {
                // here, I was hoping the "data" would refer to the entire
                // row / object being bound, so that I could check for 
                // certain conditions to be true (or false)
                if (data.value === null) {
                    return 'Null Value';
                    //return '<span class="far fa-trash-alt mr-2" title="Delete"></span>';
                }
                else {
                    //return '<span class="far fa-trash-alt mr-2" title="Delete entry"></span>' +
                    //    '<span class="fab fa-nintendo-switch" title="Promote entry"></span>';

                    //return '<button type="button" style="margin-right: 0px;" data-toggle="modal" data-target="#myModal">REQUEST REVIEW</button >';
                    return '<audio controls>' +
                        //'<source src="horse.ogg" type="audio/ogg">' +
                        '<source src="' + data.value + '" type="audio/mpeg">' +
                        'Your browser does not support the audio element.' +
                        '</audio>';

                }
            }
        }
    ],


//    < button
//class="print-btn review-chart-top-bar-btn"
//ng - click="vm.ReviewRequestFunc(phone.Name,phone.PhoneNumber,phone.Email)"
//type = "button" style = "margin-right: 0px;" > REQUEST REVIEW</button >

    defaultColDef: {
        //flex: 1,
        resizable: true,
    },
    autoGroupColumnDef: {
        headerName: 'Leads',
        //minWidth: 300,
        cellRendererParams: {
            suppressCount: true,
        },
        cellStyle: {
            color: 'red',
            //"align-items" : 'flex-start',
            //position: relative,
            //top: -5,
        },
        //cellClass: "cell-vertical-align-text-top",
    },

    //rowStyle: { "align-items": 'center'},

    //Css Class to Impact row
    //rowClass: "cell-border cell-vertical-align-text-right",

    onRowDoubleClicked: function (params) {
        //return alert(params.node.data.Email);
        //return document.getElementById("EmailHolder").innerHTML = params.node.data.Email;
        //return '<button type="button" style="margin-right: 0px;" data-toggle="modal" data-target="#myModal">REQUEST REVIEW</button >';
        document.getElementById("AggidModalData").innerHTML = "";
        var Email = params.node.data.Email;
        var Phone = params.node.data.PhoneNumber;
        var Name = params.node.data.Name;
        var StreetAddress = params.node.data.StreetAddress;
        var Message = params.node.data.Message;
        var AudioClip = params.node.data.AudioClip;

        if (AudioClip != null)
        {
            AudioClip = '<audio controls>' +
                '<source src="' + AudioClip + '" type="audio/mpeg">' +
                'Your browser does not support the audio element.' +
                '</audio>';
        }

        var dataSet = Name + '<br />' + Email + '<br />' + Phone + '<br />' + StreetAddress
            + '<br />' + Message + '<br />';

        if (AudioClip != null) {
            dataSet = dataSet + AudioClip;
        }


        document.getElementById("AggidModalData").innerHTML = dataSet;
        return $('#ModalButton').trigger('click');
    },


    rowHeight: 50,


    pagination: true,

    // 10 rows per page (default is 100)
    paginationPageSize: 2,
    //rowData: rowData,
    treeData: true, // enable Tree Data mode
    animateRows: true,
    //groupDefaultExpanded: -1, // expand all groups by default
    getDataPath: function (data) {
        return data.NameList;
    },

    
};

function onFilterTextBoxChanged() {
    gridOptions.api.setQuickFilter(
        document.getElementById('filter-text-box').value
    );
}

// wait for the document to be loaded, otherwise
// AG Grid will not find the div in the document.
//document.addEventListener('DOMContentLoaded', function () {
//    // lookup the container we want the Grid to use
//    var eGridDiv = document.querySelector('#myGrid');

//    // create the grid passing in the div to use together with the columns & data we want to use
//    new agGrid.Grid(eGridDiv, gridOptions);

//    gridOptions.api.setRowData(rowData);
//});


//function fetchdata() {
//    // lookup the container we want the Grid to use
//    var eGridDiv = document.querySelector('#myGrid');

//    // create the grid passing in the div to use together with the columns & data we want to use
//    new agGrid.Grid(eGridDiv, gridOptions);

//    gridOptions.api.setRowData(rowData);
//}

//$(document).ready(function () {
//    setInterval(fetchdata, 60000);
//});


document.addEventListener('DOMContentLoaded', function () {

    var eGridDiv = document.querySelector('#myGrid');

    new agGrid.Grid(eGridDiv, gridOptions);

    gridOptions.api.setRowData(rowData);

    setInterval(function () {
        gridOptions.api.setRowData(rowData);
    }, 300000);
});
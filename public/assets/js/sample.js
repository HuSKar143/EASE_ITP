$(function() {

   $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
        }
    });


    if($('#StudentList')[0]){
        
        var StudentList = $('#StudentList'),
            StudentListFilter = $('#StudentListFilter'),
            StudentListDataTable = StudentList.DataTable();
        
        $.ajax({
            type: 'GET'
            , url: '/getstudentlist'
            , dataType: 'json'
            , success: function (data) {

                StudentListDataTable.clear();

                var row = [];
            

                for (var i = 0; i < data.length; i++) {

                    var j = data[i];

                   

                        row.push([
                            j.student_name
                            , j.gender
                            , j.age
                          
                        ]);     
                }

                for(var i = 0; i < row.length; i++) {

                    StudentListDataTable.row.add([
                        row[i][0],
                        row[i][1],
                        row[i][2]
                      
                    ]);

                }

               StudentListDataTable.draw();

            

            }
            
        });

    }


});
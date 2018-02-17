
@extends('layout.master') 
@section('content')
 $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
        }
    });

<table id="StudentList">
    <thead class="nosort">
        <tr>
            <th>Student Name</th>
            <th>Gender</th>
            <th>Age</th>
        </tr>
    </thead>
</table>



@stop()

@section('script')
    <script type="text/javascript" src="{{asset('assets/js/sample.js')}}"></script>
@stop


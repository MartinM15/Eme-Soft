$(document).ready(function() {

    $("#btnGraficas").click(function(e) {

        var frame = $('#FrameId');
        var url = 'Graficas1.html';
        frame.attr('src', url).show();

    });
    $("#btnPanelUser").click(function(e) {

        var frame = $('#FrameId');
        var url = 'UsuariosGrid.html';
        frame.attr('src', url).show();

    });
    $("#btnPanelMaquinas").click(function(e) {

        var frame = $('#FrameId');
        var url = 'EquiposGrid.html';
        frame.attr('src', url).show();

    });
    $("#btnGenerarOrdenMantto").click(function(e) {

        var frame = $('#FrameId');
        var url = 'OrdMaintenanceGrid.html';
        frame.attr('src', url).show();

    });
    $(function() {
        $('#datetimepicker1').datetimepicker();
    });



});
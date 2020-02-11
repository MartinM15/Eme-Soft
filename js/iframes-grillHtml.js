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
    $("#btnEvidenciasMantto").click(function(e) {
        var frame = $('#FrameId');
        var url = 'EvidenciasGrid.html';
        frame.attr('src', url).show();
    });

    $('#inputGroupFile01').change(function(e) {

        var file = e.target.files[0],
            imageType = /image.*/;

        if (!file.type.match(imageType))
            return;

        var reader = new FileReader();

        reader.onload = function(e) {
            var result = e.target.result;
            $('#imgSalidaAntes').attr("src", result);
        }

        reader.readAsDataURL(file);

    });
    $('#inputGroupFile02').change(function(e) {
        var file = e.target.files[0],
            imageType = /image.*/;

        if (!file.type.match(imageType))
            return;

        var reader = new FileReader();

        reader.onload = function(e) {
            var result = e.target.result;
            $('#imgSalidaDespues').attr("src", result);
        }

        reader.readAsDataURL(file);
    });






});
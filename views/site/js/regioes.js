$(document).ready(function () {

    $.ajax({
        url: 'http://localhost:3000/regions/',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            var tabela = $('#cadastro tbody')
            $.each(data, function (index, item) {

                tabela.append('<tr id="line">' +
                    '<td id="code">' + item.id + '</td>' +
                    '<td>' + item.nome_regiao + '</td>' +
                    '<td>' + item.bairros + '</td>' +
                    '<td><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updateModal" data-id="' + item.id + '" id="btnEdit">Editar</button></td>' +
                    '<td><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" data-id="' + item.id + '" id="btnDelete">Excluir</button></td>'
                    + '</tr>'
                )
            })
        }
    })

    $('#btn-save').on('click', function () {

        $('#form').on('click', function (event) {
            event.preventDefault();
        });

        var nome_regiao = $('#m-regiao').val();
        var bairros = $('#m-bairros').val();

        if (nome_regiao != '' && bairros != '') {

            $.ajax({
                url: 'http://localhost:3000/regions',
                method: 'POST',
                cache: false,
                contetType: 'application/x-www-form-urlencoded',
                dataType: 'json',
                data: {
                    nome_regiao: nome_regiao,
                    bairros: bairros,
                },
                success: function () {
                    alert('Região criada com sucesso.');
                    $('#form').each(function () {
                        this.reset();
                        $('#createModal').modal('hide');
                    })
                    location.reload();
                },
                error: function (error) {
                    console.log(error);
                    alert('Região não cadastrada.');
                    $('#form').each(function () {
                        this.reset();
                        $('#createModal').modal('hide');
                    })
                    location.reload();
                }
            })
        }
        else {
            $('#createModal').modal('hide');
            alert('Preencha corretamente os dados.');
        }
    })

    $(document).on('click', '#btnEdit', function () {
        var line = $(this).closest('tr');
        var id = line.find('#code').text();
        console.log(id);

        $.ajax({
            url: 'http://localhost:3000/regions/' + id,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                var regioes = data[0]
                console.log(regioes)
                $('#u-regiao').val(regioes.nome_regiao),
                    $('#u-bairros').val(regioes.bairros),

                    $('#updateModal').modal('show')
            },
            error: function (error) {
                console.log(error);
                console.log('Não foi possível mostrar as regiões.')
            }
        })

        $(document).on('click', '#btn-update', function () {
            var novaRegiao = $('#u-regiao').val();
            var novoBairros = $('#u-bairros').val();

            if (novaRegiao != '' && novoBairros != '') {

                $.ajax({
                    url: 'http://localhost:3000/regions/' + id,
                    method: 'PUT',
                    dataType: 'json',
                    data: {
                        nome_regiao: novaRegiao,
                        bairros: novoBairros
                    },
                    success: function () {
                        alert('Região atualizada com sucesso.')
                        $('#pdateModal').modal('hide');
                        location.reload();
                    },
                    error: function (error) {
                        alert('Não foi possível atualizar a região.')
                        console.log(error)
                    }
                })
            }
        })
    })

    $(document).on('click', '#btnDelete', function () {
        var line = $(this).closest('tr');
        var id = line.find('#code').text();

        $('#deleteModal').modal('show');

        $(document).on('click', '#btn-delete', function () {
            $.ajax({
                url: 'http://localhost:3000/regions/' + id,
                method: 'DELETE',
                success: function () {
                    line.remove();
                    alert('Produto excluido com sucesso.')
                    location.reload();
                },
                error: function (error) {
                    alert('Produto não foi excluido com sucesso.');
                    console.log(error);
                }
            })
        })
    })

}); //fim-ready
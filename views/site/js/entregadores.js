$(document).ready(function (){
        $.ajax({
                url: 'http://localhost:3000/deliverymans',
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                        var tabela = $('#cadastro tbody')
                        $.each(data, function (index, item){
                                tabela.append('<tr id="line">' +
                                '<td id="code">' + item.id + '</td>' +
                                '<td>' + item.cnh + '</td>' +
                                '<td>' + item.nome_entregador + '</td>' +
                                '<td>' + item.telefone_entregador + '</td>' +
                                '<td>' + item.id_regiao + '</td>' +
                                '<td><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updateModal" data-id="' + item.id + '" id="btnEdit">Editar</button></td>' + 
                                '<td><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" data-id="' + item.id + '" id="btnDelete">Excluir</button></td>'+
                                '</tr>')
                        })
                }
        })

        $('#btn-save').on('click', function(){

                $('#form').on('click', function (event){
                        event.preventDefault();
                });

                var cnh = $('#m-cnh').val();
                var nome_entregador = $('#m-nome');
                var telefone_entregador = $('#m-telefone');
                var id_regiao = $('#m-id_regiao')

                if( cnh != '' && nome_entregador != '' && telefone_entregador != '' && id_regiao != ''){

                        $.ajax({
                                url: 'http://localhost:3000/deliverymans',
                                method: 'POST',
                                dataType: 'json',
                                data:{
                                        cnh: $('#m-cnh').val(),
                                        nome_entregador: $('#m-nome').val(),
                                        telefone_entregador: $('#m-telefone').val(),
                                        id_regiao: $('#m-id_regiao').val(),
                                },
                                success: function(){
                                        alert('Entregador cadastrado com sucesso.');
                                        $('#form').each(function(){
                                                this.reset();
                                                $('#createModal').modal('hide');
                                        })
                                        location.reload();
                                },
                                error: function(err){
                                        console.log(err);
                                        alert('Produto não cadastrado');
                                        $('#form').each(function() {
                                                this.reset();
                                                $('#createModal').modal('hide');
                                        })
                                        location.reload();
                                }
                        })
                }
                else{
                        $('#createModal').modal('hide')
                        alert('Preencha os dados corretamente.')
                }
        })

        $(document).on('click', '#btnEdit', function (){
                var line = $(this).closest('tr');
                var id = line.find('#code').text();
                console.log(id);

                $.ajax({
                        url: 'http://localhost:3000/deliverymans/' + id,
                        method: 'GET',
                        dataType: 'json',
                        success: function(data) {
                                var entregadores = data[0]
                                $('#u-cnh').val(entregadores.cnh),
                                $('#u-nome').val(entregadores.nome_entregador),
                                $('#u-telefone').val(entregadores.telefone_entregador),
                                $('#u-id_regiao').val(entregadores.id_regiao),

                                $('#updateModal').modal('show')
                        },
                        error: function(error) {
                                console.log(error);
                                console.log('Não foi possível mostrar o produto.')
                        }
                })

                $(document).on('click', '#btn-update', function (){ 
                        var novaCNH = $('#u-cnh').val();
                        var novoNomeEntregador = $('#u-nome').val();
                        var novoTelefoneEntregador = $('#u-telefone').val();
                        var novoIDRegiao = $('#u-id_regiao').val();

                        if( novaCNH != '' && novoNomeEntregador != '' && novoTelefoneEntregador != '' && novoIDRegiao != ''){

                                $.ajax({
                                        url: 'http://localhost:3000/deliverymans/' + id,
                                        method: 'PUT',
                                        dataType: 'json',
                                        data: {
                                                cnh: novaCNH,
                                                nome_entregador: novoNomeEntregador,
                                                telefone_entregador: novoTelefoneEntregador,
                                                id_regiao: novoIDRegiao
                                        },
                                        success: function () {
                                                alert('Entregador atualizado com sucesso.');
                                                $('#updateModal').modal('hide');
                                                location.reload();
                                        },
                                        error: function (error) {
                                                alert('Não foi possível atualizar os dados do entregador.');
                                                console.log(error);
                                        }
                                })
                        }
                        else {
                                alert('Não foi possível atualizar os dados do entregador.')
                        }
                })
        })

        $(document).on('click', '#btnDelete', function() {
                var line = $(this).closest('tr');
                var id = line.find('#code').text();

                $('#deleteModal').modal('show');

                $(document).on('click', '#btn-delete', function(){
                        $.ajax({
                                url: 'http://localhost:3000/deliverymans/' + id,
                                method: 'DELETE',
                                success: function() {
                                        line.remove();
                                        alert('Dados do entregador excluido com sucesso.');
                                        location.reload();
                                },
                                error: function(error){
                                        alert('Falha ao excluir os dados do entregador.');
                                        console.log(error);
                                }
                        })
                })
        })
})
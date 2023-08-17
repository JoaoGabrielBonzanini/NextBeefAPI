$(document).ready(function (){
        $.ajax({
                url: 'http://localhost:3000/products',
                method: 'GET',
                dataType: 'json',
                success: function (data) {
                        var table = $('#cadastro tbody')
                        $.each(data, function (index, item) {
                                table.append('<tr id=line>' +
                                '<td id=code>' + item.id + '</td>' +
                                '<td>' + item.descricao_produto + '</td>' +
                                '<td>' + item.corte + '</td>' +
                                '<td>' + item.data_vencimento + '</td>' +
                                '<td>' + item.marca + '</td>' +
                                '<td>' + item.tipo + '</td>' +
                                '<td>' + item.valor_produto + '</td>' +
                                '<td>' + item.imagem + '</td>' +
                                '<td><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#updateModal" data-id="' + item.id + '" id="btnEdit">Editar</button></td>' +
                                '<td><button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" data-id="' + item.id + '" id="btnDelete">Excluir</button></td>'+
                                '</tr>')
                        })
                }
        })

        $('#btn-save').on('click', function () {
                $('#form').on('click', function (event){
                        event.preventDefault();
                })

                var descricao_produto = $('#m-descricao').val();
                var corte = $('#m-corte').val();
                var data_vencimento = $('#m-vencimento').val();
                var marca = $('#m-marca').val();
                var tipo = $('#m-tipo').val();
                var valor_produto = $('#m-valor').val().replace(',' , '.');
                var imagem = $('#m-imagem').val();

                if(descricao_produto != '' && corte != '' && data_vencimento != '' && marca != '' && tipo != '' && valor_produto != '' && imagem != '') {

                        $.ajax ({
                                url: 'http://localhost:3000/products', 
                                method: 'POST',
                                cache: false,
                                contentType: 'application/x-www-form-urlencoded',
                                dataTYpe: 'json',
                                data: {
                                        descricao_produto: descricao_produto,
                                        corte: corte,
                                        data_vencimento: data_vencimento,
                                        marca: marca,
                                        tipo: tipo,
                                        valor_produto: valor_produto,
                                        imagem: imagem,
                                },
                                success: function(){
                                        alert('Produto cadastrado com sucesso.');
                                        $('#form').each(function (){
                                                this.reset();
                                                $('#createModal').modal('hide');
                                        })
                                        location.reload();
                                }
                        })
                }
                else {
                        $('#createModal').modal('hide');
                        alert('Preencha os dados do cadastro corretamente.')
                }  
        })

       $(document).on('click', '#btnEdit', function () {
                var line = $(this).closest('tr');
                var id = line.find('#code').text();

                $.ajax({        
                        url: 'http://localhost:3000/products/' + id,
                        method: 'GET',
                        dataType: 'json',
                        success: function (data) {
                                var produtos = data [0];
                                $('#u-descricao').val(produtos.descricao_produto),
                                $('#u-corte').val(produtos.corte),
                                $('#u-vencimento').val(produtos.data_vencimento),
                                $('#u-marca').val(produtos.marca),
                                $('#u-tipo').val(produtos.tipo),
                                $('#u-valor').val(produtos.valor_produto),
                                $('#u-imagem').val(produtos.imagem),

                                $('#updateModal').modal('show')
                        },
                        error: function (error) {
                                console.log(error);
                                console.log('Não foi possível mostrar o produto.');
                        }
                })

                $(document).on('click', '#btn-update', function (){
                        var novoDescricaoProduto = $('#u-descricao').val();
                        var novoCorte = $('#u-corte').val();
                        var novoVencimentoProduto = $('#u-vencimento').val();
                        var novaMarca = $('#u-marca').val();
                        var novoTipo = $('#u-tipo').val();
                        var novoValorProduto = $('#u-valor').val().replace(',' , '.');
                        var novaImagem = $('#u-imagem').val();

                        if(novoDescricaoProduto != '' && novoCorte != '' && novoVencimentoProduto != '' && novaMarca != '' && novoTipo != '' && novoValorProduto != '' && novaImagem != '') {

                                $.ajax({
                                        url: 'http://localhost:3000/products/' + id,
                                        method: 'PUT',
                                        dataType: 'json',
                                        data: {
                                                descricao_produto: novoDescricaoProduto,
                                                corte: novoCorte,
                                                data_vencimento: novoVencimentoProduto,
                                                marca: novaMarca,
                                                tipo: novoTipo,
                                                valor_produto: novoValorProduto,
                                                imagem: novaImagem
                                        },
                                        success: function(){
                                                alert('Produto atualizado com sucesso.');
                                                $('#updateModal').modal('hide');
                                                location.reload();
                                        },
                                        error: function(error) {
                                                alert('Não foi possível atualizar este produto.');
                                                console.log(error);
                                                location.reload();
                                        }
                                })
                        }
                        else{
                                alert('Falha para atualizar o produto.')
                        }
                })
       })

       $(document).on('click', '#btnDelete', function () {
                var line = $(this).closest('tr');
                var id = line.find('#code').text();

                $('#deleteModal').modal('show');

                $(document).on('click', '#btn-delete', function(){
                        $.ajax({
                                url: 'http://localhost:3000/products/' + id,
                                method: 'DELETE',
                                success: function(){
                                        line.remove();
                                        alert('Produto excluido com sucesso.')
                                        location.reload();
                                },
                                error: function(error){
                                        alert('Produto não foi excluido com sucesso.');
                                        console.log(error);
                                }
                        })
                })
       })
})
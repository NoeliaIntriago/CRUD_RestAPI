const cargarClientes = () => {
	fetch('http://localhost:3001/api/clientes')
	.then(texto => texto.json())
	.then(clientes => {
		for(let cliente of clientes) {
			let activo = cliente.estado ? 'on':'off'
			let plantilla = `
				<tr>
	                <td class="align-middle">
	                  <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
	                    <input type="checkbox" class="custom-control-input" id="item-1">
	                    <label class="custom-control-label" for="item-1"></label>
	                  </div>
	                </td>
	                <td class="text-nowrap align-middle">${cliente.nombre} ${cliente.apellido}</td>
	                <td class="text-nowrap align-middle"><span>${cliente.fechaNacimiento}</span></td>
	                <td class="text-center align-middle"><i class="fa fa-fw text-secondary cursor-pointer fa-toggle-${activo}"></i></td>
	                <td class="text-center align-middle">
	                  <div class="btn-group align-top">
	                    <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" data-target="#user-form-modal">Edit</button>
	                    <button class="btn btn-sm btn-outline-secondary badge" type="button"><i class="fa fa-trash"></i></button>
	                  </div>
	                </td>
	              </tr>
			`

			document.getElementById('clientes').innerHTML += plantilla
		}
	})
}

window.onload = () => {
	
	cargarClientes()

}
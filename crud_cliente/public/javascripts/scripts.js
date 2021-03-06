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
	                    <button class="btn btn-sm btn-outline-secondary badge" type="button" data-toggle="modal" data-target="#user-form-modal" onclick="actualizarCliente(${cliente.id})">Edit</button>
	                    <button class="btn btn-sm btn-outline-secondary badge" type="button" onclick="eliminarCliente(${cliente.id})"><i class="fa fa-trash"></i></button>
	                  </div>
	                </td>
	              </tr>
			`

			document.getElementById('clientes').innerHTML += plantilla
		}
	})
}

const crearCliente = () => {
	const form = document.getElementById("newClientForm");
	form.addEventListener('submit', function (e){
		var formData = {
			nombre: document.getElementById("name_input").value,
			apellido: document.getElementById("lastname_input").value,
			fechaNacimiento: document.getElementById("dob_input").value,
			estado: document.getElementById("notifications-blog").checked
		}
		fetch("http://localhost:3001/api/clientes", {
			method: 'post',
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(response => {
			response.json()
		})
		.catch(function(error) {
			console.log('Hubo un problema con la petici??n Fetch: ' + error.message);
		});
		
	});
}

const actualizarCliente = (cliente) => {
	const form = document.getElementById("newClientForm");
	form.addEventListener('submit', function (e){
		var formData = {
			nombre: document.getElementById("name_input").value,
			apellido: document.getElementById("lastname_input").value,
			fechaNacimiento: document.getElementById("dob_input").value,
			estado: document.getElementById("notifications-blog").checked
		}
		let url = "http://localhost:3001/api/clientes/"+cliente
		fetch(url, {
			method: "put",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(response => {
			response.json()
		})
		.catch(function(error) {
			console.log("Hubo un problema con la petici??n Fetch: " + error.message);
		}) 
	});
}

const eliminarCliente = (idCliente) => {
	let url = "http://localhost:3001/api/clientes/"+idCliente
	fetch(url, {
		method: "delete"
	})
	.then(response => {
		response.json();
	})
	.then(data => {
		location.reload();
	})
	.catch(function(error) {
		console.log("Hubo un problema con la petici??n Fetch: " + error.message);
	}) 
}

window.onload = () => {
	
	cargarClientes();
	crearCliente();
}
# CRUD RestAPI

#Configuración e instalación

Para levantar los servicios en ambos proyecto mediante la línea de comandos, deben ejecutar desde dos diferentes consolas:

```
npm install
npm run devstart
```

Luego, desde el directorio de crud_api, ejecutar los siguientes comandos:

```
npm install -g sequelize-cli
npm install --save sequelize mysql2
sequelize init
```
Modifique las credenciales en el archivo <b>config/config.json</b> para conectar con su base de datos.

Los servicios se encuentran en los siguientes puertos

Cliente 3003 http://localhost:3003/ <br>
Servidor 3001 http://localhost:3001/api/clientes

# Consigna

Desde el cliente, todas las peticiones al servidor REST se realizarán mediante fetch.

¡Bienvenidos a nuestra Evaluacion Express!

Fecha de entrega: (Ver en classroom) - enviando link de repositorio de GitHub

La idea de este trabajo práctico es que puedas encarar tu primera experiencia programando una aplicación web por tu cuenta. Igual, tranqui no te vamos a pedir nada que no hayamos visto hasta el momento.

En esta ocasión, nuestro objetivo va a ser crear un sitio web que nuclee la información de distintas concesionarias de autos, tal como su dirección, localidad, autos en venta, etc. (Vas a poder encontrar esta información en el archivo json).

Las condiciones es que pongas en práctica todos tus conocimientos de Express. Para eso te vamos a dar una lista de rutas que tienen que estar incluidas en nuestro sitio, estas son:

● /
● /sucursales
● /sucursales/:sucursal
● /marcas
● /marcas/:marca
● /autos
● /autos/:marca
● /autos/:marca/:dato?

Los objetivos de estas rutas son:

*En todas las rutas deberías indicar la cantidad de autos que se muestran

❏ Home (/)
En esta sección vas a tener que escribir un mensaje de bienvenida para el usuario y listar el nombre de las distintas concesionarias que se encuentran en nuestra base de datos (solamente el nombre de las sucursales)

❏ /sucursales
En esta ruta vas a tener que volver a listar las sucursales que estén en nuestra base de datos, pero adicionalmente tendrás que aclarar su dirección y teléfono.

❏ /sucursales/:sucursal
En este caso vas a tener mostrar toda la información de la sucursal que el usuario ingrese en la url (¡recordá que es una ruta parametrizada!). Esto incluye el nombre de la sucursal, dirección, teléfono y todos los vehículos (marca, modelo, año y cantidad total de autos) que están en la misma. Recordá que si la sucursal no existe deberás mostrarle al usuario un
mensaje de error.

❏ /marcas
En esta sección te pedimos que listes todas las marcas de los autos que se encuentran en nuestras concesionarias. Ojo, que las marcas pueden repetirse ya que existen distintos autos con la misma marca, pero sólo queremos que la marca aparezcan una vez sola vez.

❏ /marcas/:marca
Acá vas a tener que listar todos los autos que le pertenezcan a la marca particular que el usuario está ingresando por la url. Por cada auto deberás aclarar, además de la marca,el modelo y el año.

❏ /autos
En este sitio vas a tener que listar TODOS los autos de nuestras concesionarias .

❏ /autos/:marca

❏ /autos/:marca/:dato

*Opcional
Esta última ruta se encargará de traernos todos los autos y todos los datos asociados a este de una marca especifica que el usuario ingrese. A su vez, de forma opcional, el usuario podrá ingresar un color/año (estos son los posibles datos de los autos) específico en la url para que no solo traiga los autos de la marca/año indicado, si no que tambien del color/año
ingresado.

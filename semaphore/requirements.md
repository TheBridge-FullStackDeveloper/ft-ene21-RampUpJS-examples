Se pide:

**Nivel 1**

Representar un semáforo con una luz (círculo negro) y un botón que al hacer click sobre él, la luz cambie de color:

- De Negro (Estado 0) pasa a Verde (Estado 1)
- De Verde (Estado 1) pasa a Ámbar (Estado 2)
- De Ámbar (Estado 2) pasa a Rojo (Estado 3)
- De Rojo (Estado 3) pasa a Verde (Estado 1)

**Nivel 2**

Lo mismo que en el caso anterior, pero con tres luces:

- Estado 0 (inicial): Las 3 están en negro
- Estado 1: Verde la primera y el resto negro
- Estado 2: Ámbar la segunda y el resto negro
- Estado 3: Rojo la tercera y el resto negro

**Nivel 3**

En lugar del semáforo, inicialmente aparecerán los siguientes elementos:

- Una caja de texto en la que el usuario puede introducir el número de luces que desea
- Un nuevo botón de "Crear semáforo" que al pincharlo construya el semáforo para el número de luces indicado

NOTAS:

- Las tres primeras luces se comportarán igual que en el nivel anterior
- A partir de la cuarta y siguientes, tendrán colores generados aleatoriamente (distintos de Negro, Verde, Ámbar y Rojo), para los distintos estados adicionales.
- Como máximo habrá (255 x 255 x 255) - 4 nuevos colores posibles

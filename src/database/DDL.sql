-- Crear tabla Usuario
CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    img VARCHAR(255),
    direccion VARCHAR(255),
    telefono VARCHAR(20),
    rol VARCHAR(20)
);


-- Crear tabla Producto
CREATE TABLE Producto (
    id SERIAL PRIMARY KEY,
    marca VARCHAR(50),
    modelo VARCHAR(50),
    descripcion TEXT,
    img VARCHAR(512),
    precio NUMERIC(10,2),
    stock INT,
    fecha_creacion TIMESTAMP DEFAULT NOW(),
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);


CREATE TABLE Favorito (
    usuario_id INT,
    producto_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (producto_id) REFERENCES Producto(id)
);

-- Crear tabla Pedido
CREATE TABLE Pedido (
    pedido_id SERIAL PRIMARY KEY,
    usuario_id INT,
    fecha_creacion TIMESTAMP,
    estado VARCHAR(20) CHECK (estado IN ('pendiente', 'enviado', 'entregado', 'cancelado')),
    total DECIMAL(10, 2),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

-- Crear tabla DetallePedido
CREATE TABLE DetallePedido (
    detalle_id SERIAL PRIMARY KEY,
    pedido_id INT,
    producto_id INT,
    cantidad INT,
    precio_unitario DECIMAL(10, 2),
    total DECIMAL(10, 2),
    FOREIGN KEY (pedido_id) REFERENCES Pedido(pedido_id),
    FOREIGN KEY (producto_id) REFERENCES Producto(producto_id)
);

-- Crear tabla Carrito
CREATE TABLE Carrito (
    carrito_id SERIAL PRIMARY KEY,
    usuario_id INT,
    fecha_creacion TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

-- Crear tabla DetalleCarrito
CREATE TABLE DetalleCarrito (
    detalle_id SERIAL PRIMARY KEY,
    carrito_id INT,
    producto_id INT,
    cantidad INT,
    FOREIGN KEY (carrito_id) REFERENCES Carrito(carrito_id),
    FOREIGN KEY (producto_id) REFERENCES Producto(producto_id)
);

-- Crear tabla MetodoPago
CREATE TABLE MetodoPago (
    metodo_pago_id SERIAL PRIMARY KEY,
    nombre VARCHAR(255)
);

-- Crear tabla DireccionEnvio
CREATE TABLE DireccionEnvio (
    direccion_envio_id SERIAL PRIMARY KEY,
    usuario_id INT,
    direccion VARCHAR(255),
    ciudad VARCHAR(255),
    estado_provincia VARCHAR(255),
    codigo_postal VARCHAR(10),
    pais VARCHAR(255),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

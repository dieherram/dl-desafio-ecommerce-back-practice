CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    direccion VARCHAR(255),
    telefono VARCHAR(20),
    rol VARCHAR(20)
);

CREATE TABLE Producto (
    producto_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    descripción TEXT,
    precio DECIMAL(10, 2),
    stock INT,
    categoría_id INT,
    FOREIGN KEY (categoría_id) REFERENCES Categoría(categoría_id)
);

CREATE TABLE Categoría (
    categoría_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    descripción TEXT
);

CREATE TABLE Pedido (
    pedido_id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    fecha_creación DATETIME,
    estado ENUM('pendiente', 'enviado', 'entregado', 'cancelado'),
    total DECIMAL(10, 2),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(usuario_id)
);

CREATE TABLE DetallePedido (
    detalle_id INT PRIMARY KEY AUTO_INCREMENT,
    pedido_id INT,
    producto_id INT,
    cantidad INT,
    precio_unitario DECIMAL(10, 2),
    total DECIMAL(10, 2),
    FOREIGN KEY (pedido_id) REFERENCES Pedido(pedido_id),
    FOREIGN KEY (producto_id) REFERENCES Producto(producto_id)
);

CREATE TABLE Carrito (
    carrito_id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    fecha_creación DATETIME,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(usuario_id)
);

CREATE TABLE DetalleCarrito (
    detalle_id INT PRIMARY KEY AUTO_INCREMENT,
    carrito_id INT,
    producto_id INT,
    cantidad INT,
    FOREIGN KEY (carrito_id) REFERENCES Carrito(carrito_id),
    FOREIGN KEY (producto_id) REFERENCES Producto(producto_id)
);

CREATE TABLE MétodoPago (
    método_pago_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255)
);

CREATE TABLE DirecciónEnvío (
    dirección_envío_id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT,
    dirección VARCHAR(255),
    ciudad VARCHAR(255),
    estado_provincia VARCHAR(255),
    código_postal VARCHAR(10),
    país VARCHAR(255),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(usuario_id)
);

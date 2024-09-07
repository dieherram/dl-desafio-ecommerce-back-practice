CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    fecha_creacion TIMESTAMP DEFAULT NOW(),
    estado VARCHAR(20),
    img VARCHAR(512),
    rol VARCHAR(50)
);

CREATE TABLE Producto (
    id SERIAL PRIMARY KEY,
    marca VARCHAR(50),
    modelo VARCHAR(50),
    descripcion TEXT,
    img VARCHAR(512),
    precio NUMERIC(10),
    stock INT,
    fecha_creacion TIMESTAMP DEFAULT NOW(),
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

CREATE TABLE favoritos (
    id SERIAL PRIMARY KEY,
    usuario_id INT,
    producto_id INT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (producto_id) REFERENCES Producto(id)
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

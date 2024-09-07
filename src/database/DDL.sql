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
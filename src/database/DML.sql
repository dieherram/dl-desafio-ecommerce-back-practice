INSERT INTO Usuario (id, nombre, email, password_hash, estado, img, rol)
VALUES
(DEFAULT, 'Juan Pérez', 'juan.perez@example.com', 'hashed_password_1', 'activo', 'https://xsgames.co/randomusers/assets/avatars/male/0.jpg', 'admin'),
(DEFAULT, 'María Gómez', 'maria.gomez@example.com', 'hashed_password_2', 'activo', 'https://xsgames.co/randomusers/assets/avatars/female/0.jpg', 'user'),
(DEFAULT, 'Carlos López', 'carlos.lopez@example.com', 'hashed_password_3', 'inactivo', 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg', 'user'),
(DEFAULT, 'Ana Torres', 'ana.torres@example.com', 'hashed_password_4', 'activo', 'https://xsgames.co/randomusers/assets/avatars/female/41.jpg', 'user'),
(DEFAULT, 'Luis Martínez', 'luis.martinez@example.com', 'hashed_password_5', 'activo', 'https://xsgames.co/randomusers/assets/avatars/male/69.jpg', 'admin'),
(DEFAULT, 'Sofía Fernández', 'sofia.fernandez@example.com', 'hashed_password_6', 'inactivo', 'https://xsgames.co/randomusers/assets/avatars/female/44.jpg', 'user'),
(DEFAULT, 'Miguel Rodríguez', 'miguel.rodriguez@example.com', 'hashed_password_7', 'activo', 'https://xsgames.co/randomusers/assets/avatars/male/61.jpg', 'user'),
(DEFAULT, 'Laura Sánchez', 'laura.sanchez@example.com', 'hashed_password_8', 'activo', 'https://xsgames.co/randomusers/assets/avatars/female/48.jpg', 'user'),
(DEFAULT, 'Diego Jiménez', 'diego.jimenez@example.com', 'hashed_password_9', 'activo', 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg', 'moderador'),
(DEFAULT, 'Lucía Morales', 'lucia.morales@example.com', 'hashed_password_10', 'inactivo', 'https://xsgames.co/randomusers/assets/avatars/female/18.jpg', 'user');

INSERT INTO Producto (id, marca, modelo, descripcion, img, precio, stock, usuario_id)
VALUES
(DEFAULT, 'Toyota', 'Corolla', 'Sedán compacto con excelente consumo de combustible.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 20000.00, 5, 1),
(DEFAULT, 'Honda', 'Civic', 'Sedán deportivo con gran tecnología y seguridad.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 22000.00, 3, 2),
(DEFAULT, 'Ford', 'Mustang', 'Deportivo icónico con gran potencia.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 35000.00, 2, 3),
(DEFAULT, 'Chevrolet', 'Camaro', 'Deportivo americano de alto rendimiento.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 37000.00, 4, 4),
(DEFAULT, 'Tesla', 'Model S', 'Vehículo eléctrico con alta autonomía y rendimiento.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 80000.00, 1, 5),
(DEFAULT, 'BMW', 'X5', 'SUV de lujo con diseño elegante y características avanzadas.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 60000.00, 2, 6),
(DEFAULT, 'Audi', 'A4', 'Sedán premium con tecnologías innovadoras.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 40000.00, 6, 7),
(DEFAULT, 'Mercedes-Benz', 'GLA', 'SUV compacta de lujo con un diseño moderno.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 45000.00, 3, 8),
(DEFAULT, 'Volkswagen', 'Jetta', 'Sedán confiable con tecnología avanzada.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 25000.00, 8, 9),
(DEFAULT, 'Hyundai', 'Tucson', 'SUV compacta con gran espacio y tecnología.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 30000.00, 7, 10),
(DEFAULT, 'Kia', 'Sorento', 'SUV de tamaño mediano con un diseño moderno.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 32000.00, 4, 1),
(DEFAULT, 'Nissan', 'Altima', 'Sedán con diseño deportivo y un consumo eficiente.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 27000.00, 5, 2),
(DEFAULT, 'Mazda', 'CX-5', 'SUV con excelente rendimiento y características de seguridad.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 28000.00, 6, 3),
(DEFAULT, 'Subaru', 'Forester', 'SUV con tracción total y gran confiabilidad.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 31000.00, 3, 4),
(DEFAULT, 'Jeep', 'Wrangler', 'SUV todoterreno con capacidades extremas.', 'https://wikicharlie-cdn-img.b-cdn.net/b/b8/El_Rocomovil_%28The_Bouldermobile%29.jpg', 45000.00, 2, 5);

INSERT INTO favoritos (id, usuario_id, producto_id)
VALUES
(DEFAULT, 1, 1),
(DEFAULT, 1, 5),
(DEFAULT, 2, 2),
(DEFAULT, 2, 6),
(DEFAULT, 3, 3),
(DEFAULT, 3, 7),
(DEFAULT, 4, 4),
(DEFAULT, 4, 8),
(DEFAULT, 5, 5),
(DEFAULT, 5, 9),
(DEFAULT, 6, 6),
(DEFAULT, 6, 10),
(DEFAULT, 7, 7),
(DEFAULT, 7, 11),
(DEFAULT, 8, 8),
(DEFAULT, 8, 12),
(DEFAULT, 9, 9),
(DEFAULT, 9, 13),
(DEFAULT, 10, 10),
(DEFAULT, 10, 14);

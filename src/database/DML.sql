INSERT INTO Categoría (categoría_id, nombre, descripción)
VALUES
  (DEFAULT, 'Sedan', 'Vehículo de cuatro puertas con carrocería tipo sedán'),
  (DEFAULT, 'SUV', 'Vehículo utilitario deportivo, ideal para todo terreno'),
  (DEFAULT, 'Camioneta', 'Vehículo de carga ligera, con capacidad para transportar objetos voluminosos'),
  (DEFAULT, 'Deportivo', 'Vehículo diseñado para altas prestaciones y velocidad'),
  (DEFAULT, 'Híbrido', 'Vehículo que combina un motor de combustión interna y uno eléctrico'),
  (DEFAULT, 'Eléctrico', 'Vehículo propulsado exclusivamente por energía eléctrica');

INSERT INTO Producto (producto_id, nombre, descripción, precio, stock, categoría_id, favorito)
VALUES
  (DEFAULT, 'Toyota Corolla', 'Sedan compacto y eficiente', 2000000, 10, 1, FALSE),
  (DEFAULT, 'Honda CR-V', 'SUV familiar y versátil', 2500000, 15, 2, TRUE),
  (DEFAULT, 'Ford F-150', 'Camioneta pickup resistente y potente', 3500000, 8, 3, FALSE),
  (DEFAULT, 'Porsche 911', 'Deportivo de alta gama y rendimiento', 10000000, 5, 4, TRUE),
  (DEFAULT, 'Nissan Leaf', 'Vehículo eléctrico compacto y eficiente', 3000000, 12, 6, FALSE),
  (DEFAULT, 'BMW X5', 'SUV de lujo con tecnología avanzada', 6000000, 7, 2, TRUE),
  (DEFAULT, 'Fiat 500', 'Automóvil pequeño y urbano', 1500000, 18, 1, FALSE),
  (DEFAULT, 'Mercedes-Benz Clase G', 'SUV todoterreno de lujo', 12000000, 3, 2, TRUE),
  (DEFAULT, 'Tesla Model S', 'Sedan eléctrico de alto rendimiento', 9000000, 10, 6, TRUE),
  (DEFAULT, 'Ford Mustang', 'Deportivo clásico y potente', 4500000, 9, 4, FALSE);
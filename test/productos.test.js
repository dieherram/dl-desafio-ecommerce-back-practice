import request from 'supertest'
import app from '../src/app.js'
import { productModel } from '../src/models/productos.model.js'

// Mockear el modelo para evitar llamadas a la base de datos real
jest.mock('../src/models/productos.model.js')

describe('Product Endpoints', () => {
  
  // Test para obtener todos los productos
  describe('GET /products', () => {
    it('Debe devolver todos los productos', async () => {
      productModel.getAllProducts.mockResolvedValue([
        { id: 1, modelo: 'Modelo1', marca: 'Marca1' },
        { id: 2, modelo: 'Modelo2', marca: 'Marca2' }
      ])

      const res = await request(app).get('/products')

      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveLength(2)
      expect(res.body[0].modelo).toBe('Modelo1')
    })

    it('Debe devolver un error 500 si falla la base de datos', async () => {
      productModel.getAllProducts.mockRejectedValue(new Error('Error fetching products'))

      const res = await request(app).get('/products')
      expect(res.statusCode).toEqual(500)
      expect(res.body.message).toBe('Internal server error')
    })
  })

  // Test para obtener un producto por ID
  describe('GET /products/:id', () => {
    it('Debe devolver un producto por su ID', async () => {
      const product = { id: 1, modelo: 'Modelo1', marca: 'Marca1' }
      productModel.getProductById.mockResolvedValue(product)

      const res = await request(app).get('/products/1')
      expect(res.statusCode).toEqual(200)
      expect(res.body.modelo).toBe('Modelo1')
    })

    it('Debe devolver 404 si no encuentra el producto', async () => {
      productModel.getProductById.mockResolvedValue(null)

      const res = await request(app).get('/products/1')
      expect(res.statusCode).toEqual(404)
      expect(res.body.message).toBe('Product not found')
    })
  })

  // Test para crear un nuevo producto
  describe('POST /products', () => {
    it('Debe crear un nuevo producto', async () => {
      const newProduct = { id: 3, modelo: 'Modelo3', marca: 'Marca3', descripcion: 'Nuevo producto' }
      productModel.addProduct.mockResolvedValue(newProduct)

      const res = await request(app)
        .post('/products')
        .send({ modelo: 'Modelo3', marca: 'Marca3', descripcion: 'Nuevo producto' })

      expect(res.statusCode).toEqual(201);
      expect(res.body.modelo).toBe('Modelo3')
    });

    it('Debe devolver 500 si falla la creación del producto', async () => {
      productModel.addProduct.mockRejectedValue(new Error('Error creating product'))

      const res = await request(app)
        .post('/products')
        .send({ modelo: 'Modelo3', marca: 'Marca3', descripcion: 'Nuevo producto' })

      expect(res.statusCode).toEqual(500)
      expect(res.body.message).toBe('Internal server error')
    })
  })

  // Test para actualizar un producto
  describe('PUT /products/:id', () => {
    it('Debe actualizar un producto', async () => {
      const updatedProduct = { id: 1, modelo: 'ModeloActualizado', marca: 'MarcaActualizada' }
      productModel.updateProductById.mockResolvedValue(updatedProduct)

      const res = await request(app)
        .put('/products/1')
        .send({ modelo: 'ModeloActualizado', marca: 'MarcaActualizada' })

      expect(res.statusCode).toEqual(200)
      expect(res.body.modelo).toBe('ModeloActualizado')
    })

    it('Debe devolver 404 si el producto no existe', async () => {
      productModel.updateProductById.mockResolvedValue(null)

      const res = await request(app)
        .put('/products/1')
        .send({ modelo: 'ModeloActualizado', marca: 'MarcaActualizada' })

      expect(res.statusCode).toEqual(404)
      expect(res.body.message).toBe('Product not found')
    });
  });

  // Test para eliminar un producto
  describe('DELETE /products/:id', () => {
    it('Debe eliminar un producto', async () => {
      productModel.deleteProductById.mockResolvedValue(true)

      const res = await request(app).delete('/products/1')
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toBe('Product deleted successfully')
    })

    it('Debe devolver 404 si el producto no existe', async () => {
      productModel.deleteProductById.mockResolvedValue(false)

      const res = await request(app).delete('/products/1')
      expect(res.statusCode).toEqual(404)
      expect(res.body.message).toBe('Product not found')
    })
  })
})



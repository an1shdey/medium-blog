import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
	}
}>();

app.post('/api/v1/signup', (c) => {
	const prisma = new PrismaClient({
		accelerateUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())

	return c.text('signup route')
})

app.post('/api/v1/signin', (c) => {
	return c.text('signin route')
})

app.post('/api/v1/blog', (c) => {
	return c.text('create blog route')
})

app.put('/api/v1/blog', (c) => {
	return c.text('update blog route')
})

app.get('/api/v1/blog/:id', (c) => {
	return c.text('get blog route')
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('get bulk blog route')
})

export default app

const Koa = require('koa');
const app = new Koa();
const PixelPay = require('@pixelpay/sdk');

// Configuracion del SDK
PixelPay.setup('2212294583', 'ae2966c0153bd8d53c4b7b2ac4c27efd' ,'https://pixel-pay.com');

// Creacion del objeto Order
var order = PixelPay.newOrder();

// Requerimientos mínimos
order.setOrderID('AB1234');
order.setFullName('John Doe');
order.setEmail('johndoe@email.test');
order.setAmount(1.99);

// Generar pago
PixelPay.payOrder(order).then(function(response) {
console.log(response);
}).catch(function(err) {
console.error('Error: ', err);
});


// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {


  //**** case of microservices********* */
  //listening to the auth server
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://aqoqjxcr:GSKXTf3bvD-cRT6V2zRAK-kijHEFyGsB@octopus.rmq3.cloudamqp.com/aqoqjxcr'],
      queue: 'product_queue',
      queueOptions: {
        durable: false,
      },
    },
  })
  //listening to the admin server for registering client
  // const app1 = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: ['amqps://aqoqjxcr:GSKXTf3bvD-cRT6V2zRAK-kijHEFyGsB@octopus.rmq3.cloudamqp.com/aqoqjxcr],
  //     queue: 'product_client_queue',
  //     queueOptions: {
  //       durable: false,
  //     },
  //   },
  // })
 await app.listen()
//  await app1.listen()
  

 
}
bootstrap();

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientController } from './client.controller';
import { Client } from './client.entity';
import { ClientService } from './client.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client]),
    HttpModule,
    ClientsModule.register([
      {
        name: 'CLIENT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://aqoqjxcr:GSKXTf3bvD-cRT6V2zRAK-kijHEFyGsB@octopus.rmq3.cloudamqp.com/aqoqjxcr'],
          queue: 'product_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}

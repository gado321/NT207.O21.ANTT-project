import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]),
  ClientsModule.register([
    {
      name: 'PRODUCT_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://aqoqjxcr:GSKXTf3bvD-cRT6V2zRAK-kijHEFyGsB@octopus.rmq3.cloudamqp.com/aqoqjxcr'],
        queue: 'product_queue',
        queueOptions: {
          durable: false
        },
      },
    }
  ])
],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

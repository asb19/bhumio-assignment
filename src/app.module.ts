import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { SupportDeskModule } from './support-desk/support-desk.module';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        SESSION_SECRET: Joi.string().required(),
        EMAIL_SECRET: Joi.string().required(),
      }),
    }),
    PrismaModule,
    PostModule,
    SupportDeskModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}

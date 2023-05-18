import { AppModule } from './app.module';
import { NestFactory } from "@nestjs/core"
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cors from 'cors';

async function start() {

    const PORT = process.env.PORT || 3000
    const app = await NestFactory.create<NestExpressApplication>(AppModule)
    app.use(cors());

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()
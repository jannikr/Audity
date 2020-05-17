import express from 'express';
import bodyParser from 'body-parser'

import SpaceController from "./infastructure/controller/RepositoryController";
import OpenSpaceUseCase from "./domain/usecases/OpenSpaceUseCase";
import InMemorySpaceRepository from "./infastructure/repositories/InMemorySpaceRepository";
import StaticIdGenerator from "./shared/StaticIdGenerator";

const app = express();
const port = 3000;


const spaceController = new SpaceController(new OpenSpaceUseCase(new InMemorySpaceRepository(), new StaticIdGenerator('1')));

app.use(bodyParser.json());
app.use('/spaces', spaceController.routes());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server listening at port ${port}`));
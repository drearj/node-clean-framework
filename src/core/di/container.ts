import { createContainer, asClass } from "awilix";
import Logger from "src/services/logger";

const container = createContainer();

container.register({
    logger: asClass(Logger).scoped(),
});

export { container };
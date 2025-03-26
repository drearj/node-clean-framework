
import { container } from './core/di/container';
import Logger from './services/logger';

container.register('logger', new Logger());

const logger = container.resolve('logger');
logger.log('[CORE] Node Clean Framework Initialized');
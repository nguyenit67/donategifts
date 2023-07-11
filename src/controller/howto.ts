import { Request, Response, NextFunction } from 'express';

import BaseController from './basecontroller';

export default class HowToController extends BaseController {
	constructor() {
		super();

		this.handleGetIndex = this.handleGetIndex.bind(this);
	}

	handleGetIndex(_req: Request, res: Response, _next: NextFunction) {
		this.renderView(res, 'howto');
	}
}

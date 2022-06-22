import { Injectable } from '@nestjs/common';
import { Users } from './users/users.service';

@Injectable()
export class AppService {
	login(user: Users) {
	}

	getHello(): string {
		return 'Hello World!';
	}
}

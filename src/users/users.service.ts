import { Injectable } from '@nestjs/common';

export type Users = {
	id: number;
	name: string;
	username: string;
	password: string;
}
@Injectable()
export class UsersService {
	private readonly users: Users[] = [
		{
			id: 1,
			name: "Rihan1",
			username: "rihan1",
			password: "rihan123"
		},
		{
			id: 2,
			name: "Rihan2",
			username: "rihan2",
			password: "rihan123"
		}
	];

	async findOne(username: string) {
		return await this.users.find(user => user.username === username);
	}
}

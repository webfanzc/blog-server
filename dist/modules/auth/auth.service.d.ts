import { UserService } from '../user/user.service';
import type { User, UserDocument } from '../user/schemas/user.schema';
import type { ObjectId } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<(Omit<User, 'password'> & {
        _id: ObjectId;
    }) | null>;
    login(user: UserDocument): Promise<import("../../types/utils").IResponse<{
        access_token: string;
    }>>;
}

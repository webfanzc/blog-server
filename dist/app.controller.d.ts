import { AppService } from './app.service';
import { AuthService } from './modules/auth/auth.service';
export declare class AppController {
    private readonly appService;
    private readonly authService;
    constructor(appService: AppService, authService: AuthService);
    login(req: any): Promise<import("./types/utils").IResponse<{
        access_token: string;
    }>>;
}

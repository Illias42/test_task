import { Controller, Post } from '@nestjs/common';
// import { GetCurrentUser, GetCurrentUserId, Public } from 'src/decorators';
// import { RtGuard } from 'src/guards';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Public()
  @Post('/signup')
  signup(): Promise<void> {
    return this.authService.signin();
  }

  // @Public()
  @Post('/signin')
  signin(): Promise<void> {
    return this.authService.signin();
  }

  // @Public()
  // @UseGuards(RtGuard)
  @Post('/refresh')
  refresh(): Promise<void> {
    return this.authService.refresh();
  }

  @Post('/logout')
  logout(): Promise<void> {
    return this.authService.logout();
  }
}

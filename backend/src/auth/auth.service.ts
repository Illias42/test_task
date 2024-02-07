import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async refresh() {

  }

  async signin() {

  }
  
  async signup() {

  }

  async logout() {

  }
}

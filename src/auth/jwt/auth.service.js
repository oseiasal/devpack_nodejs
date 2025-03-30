import * as jwt from 'jsonwebtoken';

export class AuthService {
  static SECRET = process.env.JWT_SECRET || 'secreto';

  static generateToken(payload, expiresIn = '1h') {
    return jwt.sign(payload, AuthService.SECRET, { expiresIn });
  }

  static verifyToken(token) {
    try {
      return jwt.verify(token, AuthService.SECRET);
    } catch {
      return null;
    }
  }
}

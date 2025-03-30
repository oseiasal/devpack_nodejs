import * as jwt from 'jsonwebtoken';

export class AuthService {
  static SECRET = process.env.JWT_SECRET || 'secreto';

  static generateToken(payload, expiresIn = '1h'){
    return jwt.sign(payload, this.SECRET, { expiresIn });
  }

  static verifyToken(token) {
    try {
      return jwt.verify(token, this.SECRET) ;
    } catch {
      return null;
    }
  }
}

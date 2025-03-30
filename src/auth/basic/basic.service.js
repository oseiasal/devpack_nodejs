export class BasicAuthService {
  static encodeBasicAuth(username, password) {
    return Buffer.from(`${username}:${password}`).toString('base64');
  }

  static decodeBasicAuth(encoded) {
    const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
    const [username, password] = decoded.split(':');
    if (!username || !password) {
      throw new Error('Credenciais inválidas');
    }
    return { username, password };
  }
}

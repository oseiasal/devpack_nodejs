import { BasicAuthService } from './basic.service';

describe('BasicAuthService', () => {
  test('deve codificar credenciais em Base64', () => {
    const encoded = BasicAuthService.encodeBasicAuth('user', 'password');
    expect(encoded).toBe('dXNlcjpwYXNzd29yZA==');
  });

  test('deve decodificar credenciais de Base64', () => {
    const { username, password } = BasicAuthService.decodeBasicAuth('dXNlcjpwYXNzd29yZA==');
    expect(username).toBe('user');
    expect(password).toBe('password');
  });

  test('deve lançar erro para credenciais inválidas', () => {
    expect(() => BasicAuthService.decodeBasicAuth('aW52YWxpZA==')).toThrow('Credenciais inválidas');
  });
});

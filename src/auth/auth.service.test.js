import { AuthService } from "./auth.service";

describe('AuthService', () => {
    test('deve gerar um token JWT', () => {
        const token = AuthService.generateToken({ userId: 123 });
        expect(token).toBeDefined();
        expect(typeof token).toBe('string');
    });

    test('deve verificar um token JWT válido', () => {
        const token = AuthService.generateToken({ userId: 123 });
        const decoded = AuthService.verifyToken(token);
        expect(decoded).toHaveProperty('userId', 123);
    });

    test('deve retornar null para token inválido', () => {
        const decoded = AuthService.verifyToken('token_invalido');
        expect(decoded).toBeNull();
    });
});

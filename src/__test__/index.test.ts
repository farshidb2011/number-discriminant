import 'jest'
import Partridge from '../index';

describe('Add Discriminator', () => {
    test('should return a string with comma', () => {
        expect(Partridge.addDiscriminator(123456789)).toBe('123,456,789');
    });

    test('should be pass with string pass', () => {
        expect(Partridge.addDiscriminator('9876543')).toBe('9,876,543');
    });

    test('should be return error if parm not number', () => {
        expect(() => Partridge.addDiscriminator('a')).toThrow();
    });

    test('pass empty string should be return 0', () => {
        expect(Partridge.addDiscriminator('')).toBe('0');
    });

    test('pass char empty string', () => {
        expect(Partridge.addDiscriminator(123456789, '')).toBe('123456789');
    });

    test('pass char "/"', () => {
        expect(Partridge.addDiscriminator(123456789, '/')).toBe('123/456/789');
    });

});


describe('Remove Discriminator', () => {
    test('should return a string without comma', () => {
        expect(Partridge.removeDiscriminator('123,456,789')).toBe('123456789');
    });

    test('should be pass with string pass', () => {
        expect(Partridge.removeDiscriminator('9,876,543')).toBe('9876543');
    });

    test('should be return error if parm not number', () => {
        expect(() => Partridge.removeDiscriminator('a')).toBe('a');
    });
});

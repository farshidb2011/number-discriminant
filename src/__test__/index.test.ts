import 'jest'
import { numberDiscriminator } from '../index';

describe('Number Discriminator', () => {
    test('should return a string with comma', () => {
        expect(numberDiscriminator(123456789)).toBe('123,456,789');
    });

    test('should be pass with string pass',()=>{
        expect(numberDiscriminator('9876543')).toBe('9,876,543');
    });

    test('should be return error if parm not number', () => {
        expect(() => numberDiscriminator('a')).toThrow();
    });

    test('pass empty string should be return 0', () => {
        expect(numberDiscriminator('')).toBe('0');
    });

    test('pass char empty string', () => {
        expect(numberDiscriminator(123456789, '')).toBe('123456789');
    });

    test('pass char "/"', () => {
        expect(numberDiscriminator(123456789, '/')).toBe('123/456/789');
    });

});

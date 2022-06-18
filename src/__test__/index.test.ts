import 'jest'
import {NumberDiscriminator} from '../index';

describe('Add Discriminator', () => {
    test('should return a string with comma', () => {
        expect(NumberDiscriminator.addDiscriminator(123456789)).toBe('123,456,789');
    });

    test('should be pass with string pass', () => {
        expect(NumberDiscriminator.addDiscriminator('9876543')).toBe('9,876,543');
    });

    test('should be return error if parm not number', () => {
        expect(() => NumberDiscriminator.addDiscriminator('a')).toThrow();
    });

    test('pass empty string should be return 0', () => {
        expect(NumberDiscriminator.addDiscriminator('')).toBe('0');
    });

    test('pass char empty string', () => {
        expect(NumberDiscriminator.addDiscriminator(123456789, '')).toBe('123456789');
    });

    test('pass char "/"', () => {
        expect(NumberDiscriminator.addDiscriminator(123456789, '/')).toBe('123/456/789');
    });

});


describe('Remove Discriminator', () => {
    test('should return a string without comma', () => {
        expect(NumberDiscriminator.removeDiscriminator('123,456,789')).toBe('123456789');
    });

    test('should be pass with string pass', () => {
        expect(NumberDiscriminator.removeDiscriminator('9,876,543')).toBe('9876543');
    });

    test('should be return error if parm not number', () => {
        expect(() => NumberDiscriminator.removeDiscriminator('a')).toBe('a');
    });
});

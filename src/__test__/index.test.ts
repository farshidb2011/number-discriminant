import 'jest'
import {NumberDiscriminator} from '../index';

describe('Add Discriminator', () => {
    test('should return a string with comma', () => {
        expect(NumberDiscriminator.add(123456789)).toBe('123,456,789');
    });

    test('should be pass with string pass', () => {
        expect(NumberDiscriminator.add('9876543')).toBe('9,876,543');
    });

    test('should be return error if parm not number', () => {
        expect(() => NumberDiscriminator.add('a')).toThrow();
    });

    test('pass empty string should be return 0', () => {
        expect(NumberDiscriminator.add('')).toBe('0');
    });

    test('pass char empty string', () => {
        expect(NumberDiscriminator.add(123456789, '')).toBe('123456789');
    });

    test('pass char "/"', () => {
        expect(NumberDiscriminator.add(123456789, '/')).toBe('123/456/789');
    });

});


describe('Remove Discriminator', () => {
    test('should return a string without comma', () => {
        expect(NumberDiscriminator.remove('123,456,789')).toBe('123456789');
    });

    test('should be pass with string pass', () => {
        expect(NumberDiscriminator.remove('9,876,543')).toBe('9876543');
    });

    test('should be return error if parm not number', () => {
        expect(() => NumberDiscriminator.remove('a')).toBe('a');
    });
});

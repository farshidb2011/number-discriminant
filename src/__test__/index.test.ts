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
    test('should remove custom separator', () => {
        expect(NumberDiscriminator.remove('123/456/789', '/')).toBe('123456789')
    })

    test('should handle number with no separators', () => {
        expect(NumberDiscriminator.remove('123456789')).toBe('123456789')
    })

    test('should handle empty string with default separator', () => {
        expect(NumberDiscriminator.remove('')).toBe('0')
    })

    test('should handle empty string with custom separator', () => {
        expect(NumberDiscriminator.remove('', '/')).toBe('0')
    })

    test('should throw InputError for non-string input', () => {
        expect(()=>{
            NumberDiscriminator.remove(123456789 as any)
        }).toThrow(new NumberDiscriminator.InputError());
    })

    test('should remove multiple occurrences of custom separator', () => {
        expect(NumberDiscriminator.remove('1--2--3--4--5', '--')).toBe('12345')
    })

    test('should handle string with mixed separators', () => {
        expect(NumberDiscriminator.remove('1,2.3,4.5', '.')).toBe('1,23,45')
    })
})

import { __createCreateStyle } from '../create_style';

describe('__createCreateStyle', () => {
  test('it should infer theme shape', () => {
    const createStyle = __createCreateStyle();
    const style = createStyle(() => ({
      container: {
        backgroundColor: 'red',
      },
    }));
    expect(style({})).toEqual({
      container: {
        backgroundColor: 'red',
      },
    });
  });
});

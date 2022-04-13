import { renderHook } from '@testing-library/react-hooks';

import { useInitialRender } from './use-initial-render';

describe('useInitialRender hook', () => {
  const setUp = () => renderHook(() => useInitialRender());

  it('should return true on initial render', () => {
    const { result } = setUp();

    expect(result.current).toBe(true);
  });

  it('should always return false on all rest renders', () => {
    const { result, rerender } = setUp();

    rerender();
    expect(result.current).toBe(false);

    rerender();
    expect(result.current).toBe(false);
  });
});

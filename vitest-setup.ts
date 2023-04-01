// vitest-setup.ts
import '@testing-library/jest-dom/extend-expect';
import * as matchers from 'vitest-dom/matchers';
import { expect } from 'vitest';
expect.extend(matchers);

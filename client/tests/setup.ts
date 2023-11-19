import { afterEach, expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';
// setupTests.js
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';
import { ApolloClient, InMemoryCache } from '@apollo/client';

afterEach(() => {
  cleanup();
});

// Model Simulator
// - Accepts natural-language task description
// - Produces: generated HTML (string), logs, optional simulated errors

import { ExecutionArtifacts, LogEntry } from '../lib/types';

/**
 * Simulates model output for the given task description.
 * @param taskDescription - The natural-language description of the task.
 * @returns The simulated execution artifacts including HTML, logs, and optional errors.
 */
export function mockGenerate(taskDescription: string): ExecutionArtifacts {
  // Placeholder HTML content
  const html = '<html><body><h1>Placeholder HTML</h1></body></html>';

  // Simulated logs
  const logs: LogEntry[] = [
    {
      timestamp: new Date(),
      level: 'info',
      message: `Mock generation for task: ${taskDescription}`
    }
  ];

  // Optional simulated errors (none for this mock)
  const errors: string[] | undefined = undefined;

  return {
    html,
    logs,
    errors
  };
}
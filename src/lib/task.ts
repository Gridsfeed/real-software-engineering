// Task Layer
// - Returns a structured taskSpec
// - Contains task description, expected artifacts, basic validation
// - No execution logic

import { TaskSpec } from './types';

/**
 * Retrieves the task specification for the given task ID.
 * @param taskId - The unique identifier of the task.
 * @returns The structured TaskSpec containing task details.
 */
export function getTaskSpec(taskId: string): TaskSpec {
  // Placeholder implementation for PoC: XS single-page HTML task
  const taskSpec: TaskSpec = {
    id: taskId,
    description: 'Generate a simple single-page HTML for XS',
    expectedArtifacts: ['index.html']
  };
  return taskSpec;
}
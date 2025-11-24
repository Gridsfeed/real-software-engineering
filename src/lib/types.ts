// Types definitions
// - Interfaces and types used across the project

export interface TaskSpec {
  id: string;
  description: string;
  expectedArtifacts: string[];
}

export interface ExecutionArtifacts {
  html: string;
  logs: LogEntry[];
  errors?: string[];
}

export interface ExecutionResult {
  artifacts: ExecutionArtifacts;
  logs: LogEntry[];
  metadata: Record<string, any>;
}

export interface ScoreBreakdown {
  completeness: number;
  structure: number;
  survivability: number;
}

export interface EvaluationResult {
  score: ScoreBreakdown;
  feedback: string;
}

export interface LogEntry {
  timestamp: Date;
  level: 'info' | 'error' | 'warn';
  message: string;
}
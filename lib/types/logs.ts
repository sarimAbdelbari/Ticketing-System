export type LogLevel = "info" | "warning" | "error" | "success";

export interface LogMetadata {
  ipAddress?: string;
  userAgent?: string;
  location?: string;
  device?: string;
}

export interface Log {
  id: string;
  type: string;
  level: LogLevel;
  description: string;
  user: string;
  timestamp: string;
  metadata?: LogMetadata;
}
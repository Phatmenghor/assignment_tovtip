export interface ApiError {
  code: string;
  message: string;
  data: Record<string, any>;
}

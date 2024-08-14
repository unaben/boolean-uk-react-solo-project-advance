export interface ApiResponse<T> {
    data: Array<T>;
    isLoading: boolean;
  }
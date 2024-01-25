export function formatDate(timeStamp: string, option?: Intl.DateTimeFormatOptions) {
  const defaultOption = {
    year: 'numeric' as const,
    month: 'numeric' as const,
    day: 'numeric' as const,
    weekday: 'short' as const,
    ...option,
  };

  return new Intl.DateTimeFormat('ko-KR', defaultOption).format(new Date(timeStamp));
}

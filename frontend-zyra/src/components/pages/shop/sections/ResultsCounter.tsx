interface ResultsCounterProps {
  count: number;
  total?: number;
  showTotal?: boolean;
}

export default function ResultsCounter({ 
  count, 
  total, 
  showTotal = true 
}: ResultsCounterProps) {
  const displayText = showTotal && total 
    ? `Showing ${count} of ${total} products`
    : `Showing ${count} products`;

  return (
    <div className="px-4 py-4 bg-champagne/10 sm:px-6 lg:px-8">
      <p className="text-sm text-graphite text-center">
        {displayText}
      </p>
    </div>
  );
}

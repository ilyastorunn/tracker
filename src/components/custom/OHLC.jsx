export default function OHLC() {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-text-primary mb-4">
        OHLC Prices (24h)
      </h3>
      <ul className="text-text-secondary space-y-2">
        <li>
          <span className="font-semibold text-text-primary">Open:</span>$71,077
        </li>
        <li>
          <span className="font-semibold text-text-primary">High:</span>$71,768
        </li>
        <li>
          <span className="font-semibold text-text-primary">Close:</span>$70,959
        </li>
        <li>
          <span className="font-semibold text-text-primary">Low:</span>$70,398
        </li>
      </ul>
    </div>
  );
}

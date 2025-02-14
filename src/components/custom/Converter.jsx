export default function Converter() {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-text-primary mb-4">
        Converter
      </h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <input
            type="number"
            placeholder="1"
            className="w-full p-2 rounded-lg bg-input text-text-primary focus:outline-none"
          />
          <select className="p-2 rounded-lg bg-input text-text-primary focus:outline-none">
            <option>BTC</option>
            <option>ETH</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <input className="flex items-center gap-4" />
          <select className="p-2 rounded-lg text-text-primary focus:outline-none">
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
}

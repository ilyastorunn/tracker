export default function News() {
  const newsItem = [
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title:
        "Germany Dumping $2.8B Bitcoin Is 'Market Intervention,' Despite Murky Legal Justifications",
      description:
        "Germany may have finally come out with a legal reason why they offloaded nearly $3 billion worth of bitcoin (BTC) into the open market, but industry experts aren't sold on the reasoning.",
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title:
        "J.D. Vance's Millions in Investments Include Crypto, Oil, and Tech",
      description:
        "If former President Donald Trump wins reflection, he will have power to set policies that affect the values of crypto, oil, and venture capital.",
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title:
        "Ethereum's Vitalik Buterin warns against knee-jerk crypto voting, as Andreessen Horowitz turns to Trump",
      description:
        "One of crypto's most influential voices has warned the industry to refrain from voting political candidates based solely on their digital asset policies.",
    },
    {
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title:
        "Crypto Exchange Kraken Paid Dave Portnoy Bitcoin in Sponsorship Deal",
      description:
        "The Barstool Sports chief took 'a big portion' of his sponsorship deal with the crypto exchange Kraken in BTC, Portnoy told CoinDesk.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col items-center py-8">
      <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
        {newsItem.map((item, index) => (
          <div
            key={index}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center space-x-2">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className="px-3 py-2 bg-card text-text-primary rounded hover:bg-muted/80"
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

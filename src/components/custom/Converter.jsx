import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Converter() {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-text-primary mb-4">
        Converter
      </h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Input type="number" placeholder="1" className="w-full [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="BTC" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BTC">BTC</SelectItem>
              <SelectItem value="ETH">ETH</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4">
          <Input type="number" placeholder="1" className="w-full [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

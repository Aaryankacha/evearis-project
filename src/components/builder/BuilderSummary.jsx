import React from 'react';
import { ShoppingBag, Trash2, Zap, ShieldCheck } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export const BuilderSummary = ({
  build,
  totalPrice,
  onRemoveComponent,
  onClearBuild,
  onAddToCart,
}) => {
  const selectedItems = Object.entries(build).filter(([_, item]) => Boolean(item));
  const totalPower = selectedItems.reduce((sum, [_, item]) => sum + (item.power || 0), 0);

  return (
    <Card hoverEffect={false} className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-white/5">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-[#9D9D9D] uppercase block">SYSTEM BLUEPRINT</span>
          <h3 className="text-lg font-light text-white tracking-tight uppercase">Build Summary</h3>
        </div>
        {selectedItems.length > 0 && (
          <button
            onClick={onClearBuild}
            className="text-[10px] font-mono text-[#9D9D9D] hover:text-white transition-colors uppercase flex items-center gap-1"
          >
            <Trash2 className="w-3 h-3" />
            Clear
          </button>
        )}
      </div>

      {/* Selected Parts List */}
      <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
        {selectedItems.length === 0 ? (
          <p className="text-xs text-[#9D9D9D] font-normal text-center py-6">
            Select hardware components from the left slots to assemble your system blueprint.
          </p>
        ) : (
          selectedItems.map(([key, item]) => (
            <div key={key} className="flex items-center justify-between text-xs py-2 border-b border-white/5">
              <div className="max-w-[70%]">
                <span className="font-medium text-white block truncate">{item.name}</span>
                <span className="text-[10px] text-[#9D9D9D] uppercase font-mono">{key}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#9D9D9D]">
                  ${typeof item.price === 'number' ? item.price.toLocaleString() : item.price}
                </span>
                <button
                  onClick={() => onRemoveComponent(key)}
                  className="text-[#9D9D9D] hover:text-white text-sm leading-none"
                >
                  ×
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Telemetry Stats */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <div className="bg-[#1C1C1C] border border-white/5 rounded-[16px] p-3.5">
          <div className="flex items-center gap-1.5 text-[#9D9D9D] text-[10px] font-mono uppercase">
            <Zap className="w-3.5 h-3.5 text-white shrink-0" />
            <span>Power Draw</span>
          </div>
          <span className="text-base font-semibold font-mono text-white mt-1 block">{totalPower} W</span>
        </div>

        <div className="bg-[#1C1C1C] border border-white/5 rounded-[16px] p-3.5">
          <div className="flex items-center gap-1.5 text-[#9D9D9D] text-[10px] font-mono uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-white shrink-0" />
            <span>Compatibility</span>
          </div>
          <span className="text-xs font-mono font-semibold text-white mt-1 block">VERIFIED</span>
        </div>
      </div>

      {/* Total & Action */}
      <div className="pt-4 border-t border-white/5 space-y-4">
        <div className="flex items-center justify-between font-mono">
          <span className="text-xs text-[#9D9D9D] uppercase tracking-wider">Estimated Total</span>
          <span className="text-2xl font-semibold text-white">
            ${totalPrice.toLocaleString()}
          </span>
        </div>

        <Button
          variant="primary"
          size="lg"
          onClick={onAddToCart}
          disabled={selectedItems.length === 0}
          className="w-full"
          icon={ShoppingBag}
        >
          Add Rig to Cart
        </Button>
      </div>
    </Card>
  );
};

export default BuilderSummary;
